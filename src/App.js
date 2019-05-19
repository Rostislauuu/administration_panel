import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import LoginForm from './LoginForm/LoginForm';
import Header from './MainSite/Header';
import MainSite from './MainSite/MainSite';
import './App.css';

class App extends Component{
  render(){

    return (
      <div>
          <Switch>
            <Route path='/login' component={LoginForm} />
            <Route path='/content' component={MainSite} />
          </Switch>
      </div>
    )

  }
}

export default App;
