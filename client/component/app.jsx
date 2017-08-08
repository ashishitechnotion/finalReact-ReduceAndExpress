import React from 'react';
import ReactDOM from 'react-dom';
// import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router-dom';
import {Router,HashRouter,Route,browserHistory} from 'react-router-dom';
import Navbar from '../containers/navBar.jsx';
import TestExpressApi from './testexpressapi.js';
import PostExpressApi from './testexpress_Post.js';
import ReduxCounter from './counter.js';



class App extends React.Component {
   render() {
      return (
     <HashRouter>
    <div>
    <Route  path="/"  component = {Navbar} />
     <Route path = "/expressApi" component = {TestExpressApi} />
     <Route path = "/postApi" component = {PostExpressApi} />
      <Route path = "/exreduce" component = {ReduxCounter} />
     </div>
</HashRouter>
      )
   }
}

export default App;