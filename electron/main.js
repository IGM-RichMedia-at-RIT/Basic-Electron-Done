//Import app and BrowserWindow from the electron package
const { app, BrowserWindow } = require('electron');

//Setup a createWindow function which will create our electron window.
const createWindow = () => {
    const win = new BrowserWindow({
        width: 800, //Width in pixels
        height: 600, //Height in pixels

        //The webpreferences object lets us set up how our web page will act.
        //Rememeber that Electron just creates a chrome window in a sandbox.
        //We can do things like "devTools: false" to disable the chrome dev tools.
        //Here we are just setteing our preload script which will run before the page loads.
        webPreferences: { 
            preload: `${__dirname}/preload.js`,
        }
    });

    //Have our window load a file. In this case, from our file structure.
    win.loadFile('./hosted/homePage.html');
}

//When the app is ready, then create the window.
app.whenReady().then(() => {
    createWindow();

    //This line creates a handler for MacOS in case the application is running
    //but there is no window, and the user clicks the dock icon.
    app.on('activate', () => {
        if(BrowserWindow.getAllWindows().length === 0){ createWindow(); }
    })
});

//Close the application when there are no windows. The 'darwin' platform is for
//MacOS, which often times keeps applications alive even if there are no windows.
app.on('window-all-closed', () => {
    if(process.platform !== 'darwin') { app.quit(); }
})