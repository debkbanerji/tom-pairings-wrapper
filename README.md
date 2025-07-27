# TOM Pairings Wrapper
Static pairings wrapper for TOM - aims to improve the user experience of pairings while allowing you to continue hosting pairings yourself

This documentation assumes you know how to host a static site

## Warning
**Please be careful!** As of the time of writing, this is the product of just a few hours of eng time and no user testing. If you do decide to use this anyway, let me know about any bugs you may find. I'll remove this warning once I've had a time to test this properly.

## How to use

- Copy all of the files in the repo into the folder where you're hosting your static assets
- Add a link to the `pairings.html` page wherever you'd like (somewhere else within your own site, on a QR code, etc.)
- Replace `logo.png` with your own file named `logo.png` if you want your own logo
- Replace the example `tom-pairings.html` file with the pairings/roster file produced by TOM - make sure the name matches!
- Any time you need to update the pairings/roster, replace the `tom-pairings.html` file with the new one
- If something breaks, you can update your core link to point directly to `tom-pairings.html`, or just replace `pairings.html` outright with the TOM output file

Let me know if you have any questions! I won't always answer, but it doesn't hurt to ask
