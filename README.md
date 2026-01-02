🔖 Leads Tracker – Chrome Extension

A lightweight and efficient Chrome extension for saving important URLs and quickly storing the current browser tab. Designed to improve productivity by keeping frequently used links easily accessible.

🚀 Features

✅ Save custom URLs manually

✅ Save the currently active browser tab with one click

✅ Persistent storage using localStorage

✅ Open saved links in a new tab

✅ Delete all saved links with a double-click safety action

✅ Clean and minimal popup UI

🛠️ Built With

HTML – Popup structure

CSS – Responsive and minimal UI styling

JavaScript – Core logic and Chrome APIs

Chrome Extensions API – Tab access

Manifest V3 – Latest Chrome extension standard

📁 Project Structure
├── index.html        # Popup UI
├── style.css         # Styling for popup
├── index.js          # Extension logic
├── manifest.json     # Chrome extension configuration
├── icon.png          # Extension icon
└── README.md         # Documentation

⚙️ How It Works

URLs are stored in the browser using localStorage

Clicking SAVE INPUT saves the entered URL

Clicking SAVE TAB stores the active tab’s URL using chrome.tabs.query

All saved links are rendered dynamically

DELETE ALL clears storage (double-click required for safety)

🧩 Installation (Local Setup)

Clone this repository:

git clone https://github.com/yogesh2002kashyap/leads-tracker-extension.git


Open Chrome and go to:

chrome://extensions/


Enable Developer mode (top right)

Click Load unpacked

Select the project folder

The extension is now installed 🎉

🔐 Permissions Used
"permissions": ["tabs"]


Required to read the active browser tab URL

📸 Preview

Popup UI displays an input field, action buttons, and a scrollable list of saved links.

(You can add screenshots here later for better presentation.)

📈 Future Improvements

🔹 Delete individual links

🔹 Tag or categorize saved URLs

🔹 Sync using Chrome storage API

🔹 Dark mode

🔹 Export / import links

👨‍💻 Author

Your Name

GitHub: https://github.com/yogesh2002kashyap

LinkedIn: https://linkedin.com/in/yogesh2002kashyap

📄 License

This project is licensed under the MIT License – feel free to use and modify it.

⭐ If you like this project, consider giving it a star!
