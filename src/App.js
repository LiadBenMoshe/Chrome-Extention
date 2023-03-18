/*global chrome*/
import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import WebList from "./WebList";

const theme = {
  blue: {
    default: "#3f51b5",
    hover: "#283593",
  },
  pink: {
    default: "#e91e63",
    hover: "#ad1457",
  },
};

const Button = styled.button`
  background-color: ${(props) => theme[props.theme].default};
  color: white;
  padding: 5px 15px;
  border-radius: 5px;
  outline: 0;
  text-transform: uppercase;
  margin: 10px 0px;
  cursor: pointer;
  box-shadow: 0px 2px 2px lightgray;
  transition: ease background-color 250ms;
  &:hover {
    background-color: ${(props) => theme[props.theme].hover};
  }
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
`;

Button.defaultProps = {
  theme: "blue",
};

function activateLasers() {
  let queryOptions = { active: true, currentWindow: true };
  chrome.tabs.query(queryOptions, (tabs) => {
    console.log(tabs[0].id);

    chrome.tabs.sendMessage(
      tabs[0].id,
      { task: "clicked" },
      function (response) {
        console.log(response);
      }
    );
  });
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <code>Check This Website</code>
        </p>
      </header>
      <WebList></WebList>
      <Button onClick={activateLasers}>Activate Docks</Button>
    </div>
  );
}

export default App;
