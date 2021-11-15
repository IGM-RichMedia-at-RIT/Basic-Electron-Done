//Create our basic react component
const HelloUser = props => {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Hello ", props.username, "!"), /*#__PURE__*/React.createElement("p", null, "Welcome to Electron!"));
}; //Render our component when the page loads


const init = () => {
  ReactDOM.render( /*#__PURE__*/React.createElement(HelloUser, {
    username: "Austin"
  }), document.getElementById('content'));
};

window.onload = init;
