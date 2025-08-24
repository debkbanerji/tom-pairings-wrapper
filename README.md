# TOM Pairings Wrapper
Pairings wrapper for TOM - aims to improve the user experience of pairings while allowing you to continue hosting pairings yourself.

Given these are static assets you do not need to upload any data to a third party. This documentation assumes you are already hosting pairings yourself, or you know how to host a static site. 

## Warning
This software has been tested on TOM outputs, but if there are format changes, behaviors may change. In this case, please be prepared to serve the raw TOM output instead. I'm not responsible for any issues you might run into.

That being said, please let me know about any bugs you find so I can fix them!

## How to use

- Copy all of the files in the repo into the folder where you're hosting your static assets
- Add a link to the `pairings.html` page wherever you'd like (somewhere else within your own site, on a QR code, etc.)
- Replace `logo.png` with your own file named `logo.png` if you want your own logo
- Replace the example `tom-pairings.html` file with the pairings/roster file produced by TOM - make sure the name matches!
    - Do **not** upload the `.tdf` file anywhere within the folder (or anywhere on your site, even if you're not using this wrapper). The wrapper is designed to operate with just the `.html` file to avoid any data security issues.
- Any time you need to update the pairings/roster, replace the `tom-pairings.html` file with the new one
- If something breaks, you can update your core link to point directly to `tom-pairings.html`, or just replace `pairings.html` outright with the TOM output file

Let me know if you have any questions! I won't always answer, but it doesn't hurt to ask
