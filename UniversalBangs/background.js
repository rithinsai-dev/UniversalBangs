import { bangs } from './bangs.js';

// Store bangs on installation
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.set({ bangs }, () => {
    console.log('Bangs saved!');
  });
});

// Default bang if no match is found
const DEFAULT_BANG = bangs.find(b => b.t === 'g');

// Handle omnibox input
chrome.omnibox.onInputEntered.addListener((text) => {
  console.log('Omnibox input received:', text);

  // Split input into words
  const words = text.trim().split(/\s+/);
  const firstWord = words[0].toLowerCase();
  const lastWord = words[words.length - 1].toLowerCase();

  // Remove any leading "!" if user still types it by habit
  const cleanFirstWord = firstWord.startsWith('!') ? firstWord.slice(1) : firstWord;
  const cleanLastWord = lastWord.startsWith('!') ? lastWord.slice(1) : lastWord;

  chrome.storage.local.get(['bangs'], (result) => {
    const storedBangs = result.bangs || bangs;
    console.log('Loaded bangs:', storedBangs);

    // Find the bang matching either first or last word
    let selectedBang = storedBangs.find(b => b.t === cleanFirstWord) ||
                       storedBangs.find(b => b.t === cleanLastWord) ||
                       DEFAULT_BANG; // fallback to Google

    let cleanQuery = text;

    // If bang was found, remove it from the query
    if (selectedBang && (cleanFirstWord === selectedBang.t || cleanLastWord === selectedBang.t)) {
      cleanQuery = text
        .replace(new RegExp(`^!?${selectedBang.t}\\s*|\\s*!?${selectedBang.t}$`, 'i'), '')
        .trim();
    }

    // Build redirect URL
    let redirectUrl;
    if (cleanQuery === '') {
      redirectUrl = `https://${selectedBang.d}`;
    } else {
      redirectUrl = selectedBang.u.replace(
        '{{{s}}}',
        encodeURIComponent(cleanQuery).replace(/%2F/g, '/')
      );
    }

    console.log('Redirecting to:', redirectUrl);

    // Update the current active tab
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.update(tabs[0].id, { url: redirectUrl });
    });
  });
});
