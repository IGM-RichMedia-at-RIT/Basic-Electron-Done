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

/* Here we are grabbing the useState and useEffect functions from the
    react library so that we don't need to say React.useState and
    React.useEffect each time we use them.
*/
const {useState, useEffect} = React;

// Create our basic react component
const HelloUser = (props) => {

    /* Here we are using the useState and useEffect to add state
        and some extra functionality to our component. More on this in
        the react functional components demo.
    */
    const [username, setUsername] = useState(props.username);

    useEffect(async () => {
        /* Note that we can make a fetch request to this url only because our Content
            Security Policy (CSP) in the homePage.html allows for it. If it didn't, our
            request would be blocked. This is to add security to our application,
            especially since Electron has full file system access.
        */
        const response = await fetch('https://simple-mvc-willoughby.herokuapp.com/getName');
        const data = await response.json();
        setUsername(data.name);
    }, []);

    return (
        <div>
            <h1>Hello {username}!</h1>
            <p>Welcome to Electron!</p>
        </div>
    )
}

//Render it to the screen
const init = () => {
    ReactDOM.render(
        <HelloUser username="User" />, 
        document.getElementById('content')
    );
}
window.onload = init;
