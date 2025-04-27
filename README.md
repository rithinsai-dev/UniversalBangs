Universal Bangs Extension

This Chrome Extension allows you to quickly search using custom "bangs" — like g, yt, am, etc. — directly from the omnibox (address bar).

✅ No need to type ! before bangs!
✅ Bang can appear at the start or end of your query!
✅ If no bang is found, it defaults to Google search.
🔥 How It Works
Example Input	What Happens
g best laptops	Google search for "best laptops"
best laptops g	Google search for "best laptops"
yt funny videos	YouTube search for "funny videos"
wireless mouse am	Amazon search for "wireless mouse"
some random text	Google search for "some random text"

    Bangs are loaded into localStorage at install.

    You can start or end your search query with a bang.

    No ! prefix required.

📂 Project Structure

extension-folder/
├── manifest.json
├── background.js
├── bangs.js
├── README.md  ← (this file)

🚀 How to Install This Extension in Chrome

    Open Chrome and go to chrome://extensions.

    Enable Developer Mode (toggle at the top right).

    Click Load unpacked.

    Select the folder where you have:

        manifest.json

        background.js

        bangs.js

        (this) README.md

    The extension should appear in your list!

🛠 How to Use

    Click on the Chrome omnibox (address bar).

    Type your query starting or ending with a bang (like g, yt, am, etc).

    Hit Enter.

    It will redirect you instantly.

Tip: Even if you accidentally type !g hello, it will still work!
📋 About Bangs

    Bangs are shortcuts to redirect your search to a specific website.

    Example:

        g → Google

        yt → YouTube

        am → Amazon

    The list of bangs comes from a file called bangs.js, based loosely on DuckDuckGo's system.

📎 Notes

    The extension uses a service worker (Manifest v3).

    It updates the current tab, not opening new tabs.

    Clean fallback: if no bang matches, it defaults to Google.

✨ Future Improvements (Ideas)

    Show dynamic suggestions while typing (bangs + site name).

    Allow user to add custom bangs manually.

    Sync bangs across devices.

Happy Searching! 🔥

Would you also like me to generate a tiny banner image (extension-banner.png) you can optionally add at the top of the README? 🎨✨ (I can generate one if you want!)
Want it? 🎯
