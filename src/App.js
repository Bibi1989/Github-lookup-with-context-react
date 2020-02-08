import React from "react";
import { Provider } from "./Context/Context";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./component/Search";
import GetUsers from "./component/users/GetUsers";

function App() {
  return (
    <Provider>
      <>
        <Search />
        <GetUsers />
      </>
    </Provider>
  );
}

export default App;
