//Create our basic react component
const HelloUser = (props) => {
    return (
        <div>
            <h1>Hello {props.username}!</h1>
            <p>Welcome to Electron!</p>
        </div>
    )
}

//Render our component when the page loads
const init = () => {
    ReactDOM.render(<HelloUser username="Austin" />, document.getElementById('content'));
}
window.onload = init;