import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import {Router,Route,hashHistory} from 'react-router';
import {Home,Profile,User,UserList,UserAdd} from './components';
require('bootstrap/dist/css/bootstrap.css');
ReactDOM.render(
    <Router>
        <Route path="/" component={App} >
            <Route path="home" component={Home}/>
            <Route path="user" component={User}>
                <Route path="list" component={UserList}/>
                <Route path="add" component={UserAdd}/>
            </Route>
            <Route path="profile" component={Profile}/>
        </Route>
    </Router>,
    document.querySelector('#app')
);