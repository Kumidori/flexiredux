import React, { Component } from 'react';
import './App.css';
import Courses from './views/Courses'
import Files from './views/Files'
import DetailCourse from './views/DetailCourse'
import IntraDetailCourse from './views/IntraDetailCourse'
import News from './views/News'
import Folder from './views/Folder'
import Forum from './views/Forum'
import Post from './views/Post'
import Profile from './views/Profile'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NewLogin from './components/NewLogin';
import history from "./history.js";


class App extends Component {
  render() {
    return (
        <Router history={history}>
            <Switch>
                <Route exact path="/" component={Profile}/>
                <Route exact path="/Post" component={Post}/>
                <Route path="/courses/:id" component={DetailCourse}/>
                <Route path="/intracourses/:id" component={IntraDetailCourse}/>
                <Route exact path="/news" component={News}/>
                <Route exact path="/courses" component={Courses}/>
                <Route exact path="/profile" component={Profile}/>
            </Switch>
        </Router>
    );
  }
}

export default App;
