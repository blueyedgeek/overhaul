module.exports = `{
  "manifest_version": 2,

  "name": "Overhaul",
  "version": "0.1",
  "description": "Make nairaland great again 😁",
  "content_scripts": [
    {
      "matches": ["http://www.nairaland.com/*"],
      "js": ["./bundle.js"],
      "css": ["./init.css"]
    }
  ]
}`;