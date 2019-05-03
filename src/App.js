import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link,Switch } from "react-router-dom";
import Login from './login';
import Dashboard from './dashboard';
import store from './redux-store/store';
import {Provider} from 'react-redux';

function App() {
  return (
    <Provider store={store}>
       <Router>
         <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/dashboard/" component={Dashboard} />
         </Switch>
       </Router>
       </Provider>
  );
}

export default App;
