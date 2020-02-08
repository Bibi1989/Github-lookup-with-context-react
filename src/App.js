import React from "react";
import { Provider } from "./Context/Context";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./component/Search";
import GetUsers from "./component/users/GetUsers";
import GetUser from "./component/users/GetUser";

function App() {
  return (
    <Provider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Search />
            <GetUsers />
          </Route>
          <Route path="/user/:login">
            <GetUser/>
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
