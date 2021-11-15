//Add an event for when the DOM Content has loaded
window.addEventListener('DOMContentLoaded', () => {
    //Once it has, create a helper function for replacing text in elements.
    const replaceText = (selector, text) => {
        const element = document.getElementById(selector);
        if(element) { element.innerText = text; }
    };

    //For each dependency (chrome, node, and electron)
    for(const dependency of ['chrome', 'node', 'electron']) {
        //Find the text in the page that lists that version, and give it the actual version
        replaceText(`${dependency}-version`, process.versions[dependency]);
    }
});