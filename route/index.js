import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import {Router,Route,hashHistory,IndexRoute,Redirect} from 'react-router';
import {Home,Profile,User,UserList,UserAdd,UserDetail} from './components';
require('bootstrap/dist/css/bootstrap.css');
function enter(){
    alert('enter Home');
}
function leave(){
    alert('leave Home');
}
ReactDOM.render(
    <Router>
        <Route path="/" component={App} >
            <IndexRoute component={Home}/>
            <Route path="home" onEnter={enter} onLeave={leave} component={Home}/>
            <Route path="user" component={User}>
                <Route path="list" component={UserList}/>
                <Route path="add" component={UserAdd}/>
                <Redirect from="detail/:id" to="/detail/:id"/>
                <Route path="/detail/:id" component={UserDetail}/>
            </Route>
            <Route path="profile" component={Profile}/>
        </Route>
    </Router>,
    document.querySelector('#app')
);