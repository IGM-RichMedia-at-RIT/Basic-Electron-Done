/* This script is being used as the preload script from our
   browserWindow (defined in main.js). When we create our window
   and load the page, we can add some events that fire before any
   other events fire on that page.

   In this case, when the dom loads, we are going to search for
   some elements by id (chrome-version, node-version, electron-version).
   When we find them, we will grab the version numbers from the built in
   process.versions environment variable and add their version
   numbers to the page.
*/

window.addEventListener('DOMContentLoaded', () => {
    const replaceText = (selector, text) => {
        const element = document.getElementById(selector);
        if(element) { element.innerHTML = text; }
    };

    for(const dependency of ['chrome', 'node', 'electron']) {
        replaceText(`${dependency}-version`, process.versions[dependency]);
    }
});
