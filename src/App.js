import React from 'react';
import { Provider } from './Context/Context'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Search from './component/Search';

function App() {
  return (
    <Provider>
      <Search />
    </Provider>
  );
}

export default App;
