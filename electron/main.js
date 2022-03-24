/* /electron/main.js is (by default) the file that is run when our
   electron application starts up using the "electron ." command.
   In this project, we can call "npm start" to run this command.
*/

// Import the app and BrowserWindow from the electron library
const { app, BrowserWindow } = require('electron');

/* Create window is our main function for creating our electron
   app's main rendering window. The BrowserWindow class has a
   constructor that takes an options object as a parameter. The
   number of options available is quite large, and a full list can
   be found here.

   https://www.electronjs.org/docs/latest/api/browser-window

   We set up the width and height of the window. We also use
   the webPreferences object to set up some values. The preload
   script is a script that runs before all others on our page,
   and always has access to node APIs (even if the project is
   configured so that the display code can't use node).

   devTools: false turns off the chromium dev tools (inspector, etc)
*/
const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: { 
            preload: `${__dirname}/preload.js`,
            devTools: false,
        }        
    });

    /* The following line removes the dropdown menus from the top of
       the electron window. You can also customize this menu if you
       want to.
    */
    win.removeMenu();

    /* Finally we will load our html file into the window. This is
       like telling our browser to navigate to a specific page (although
       we are just accessing the file locally rather than making an
       http request to a server).
    */
    win.loadFile('./hosted/homePage.html');
};

/* In electron there are two separate concepts. The BrowserWindow, which
   is the on-screen window that the user sees. There is also the app, 
   which is the logical application running in the background. A single
   app can have multiple BrowserWindows running at once.

   When the app is ready, it will call the following code. This is similar
   to something like a window.onload event for the browser.
*/
app.whenReady().then(() => {
    //Start by making our window
    createWindow();

    /* There are many events that can be handled using electron. A full
       list can be found here: https://www.electronjs.org/docs/latest/api/app

       The "activate" event is fired specifically in MacOS when someone
       tries to launch the application. In MacOS, an application can be running
       without any active windows. In that case, if they try to launch it and it
       is already running without any active windows we will create a new one.
    */
    app.on('activate', () => {
        if(BrowserWindow.getAllWindows().length === 0){ 
            createWindow(); 
        }
    });

    /* Another event that is fired is window-all-closed, which is fired when
       all the windows of an application are closed. If that is the case, we
       usually want to kill our application that runs in the background.

       The exception to this is again on MacOS, where applications can run
       without any active windows.
    */
    app.on('window-all-closed', () => {
        if(process.platform !== 'darwin') { 
            app.quit(); 
        }
    });
});
