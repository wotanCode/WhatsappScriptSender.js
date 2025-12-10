## v2.0.0: DOM Update & Button Scanner Added

- Add `DOMButtonScanner.js` to detect all clickable elements in the current WhatsApp Web DOM (used to identify the new “Send” button).
- Update `script_001.js` to support the new WhatsApp Web structure and fix the sendButton selector.
- Keep execCommand('insertText') unchanged (TODO pending).
- Improve error handling when no send button is found.
- Bump to major version due to DOM structure changes.

## v1.0.1: Added Files, Updated Instructions, and Refactored Structure
- Add `package.json` file.
- Add `script_001.js` file. This is the base script to spam messages.
- Add `readme_ES.md` file in spanish language.
- Add `.gitignore` file.
- Add dev dependencie `standard` for lint code.
- Update time to sends messages to 250 milliseconds.
- Update `readme.md` file with new instructions in a english language.
- Separate `Shrek-movie-script.txt` in a new directory `utils`.
- Delete `Scriptv01` file.

## v1.0.0: Add Base script
- Add Scriptv01. This is the base script. Send the `Shrek movie script` on whatsapp web.