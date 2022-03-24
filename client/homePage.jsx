/* Unlike our web applications, our electron apps have the potential to
   run "offline". Because of this, we don't want to rely on a CDN for our
   libraries. Instead, we would rather have them be contained within the
   project.

   To do this, we can install things like react and react-dom through npm
   and then use webpack to bundle them with our client code.

   We can also utilize root node libraries by default, even though this is
   in our client code. For example, we can use the file system library.
   Normally in a browser we can't access the file system, etc. But with
   electron, we are not restricted by "browser limitations". Even though
   we are technically running a browser, it is also a full desktop app.
*/
const React = require('react');
const ReactDOM = require('react-dom');

// Create our basic react component
const HelloUser = (props) => {
    return (
        <div>
            <h1>Hello {props.username}!</h1>
            <p>Welcome to Electron!</p>
        </div>
    )
}

//Render it to the screen
const init = () => {
    ReactDOM.render(<HelloUser username="Austin" />, 
        document.getElementById('content'));
}
window.onload = init;
