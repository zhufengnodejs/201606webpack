import React from 'react';
import {Link} from 'react-router';
export default class App extends React.Component{
    render(){
        return (
            <div className="container">
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="#">珠峰React</a>
                        </div>
                        <div className="collapse navbar-collapse">
                            <ul className="nav navbar-nav">
                                <li><Link activeStyle={{color:'red'}} to="/home">首页</Link></li>
                                <li><Link activeStyle={{color:'red'}} to="/user">用户管理</Link></li>
                                <li><Link activeStyle={{color:'red'}} to="/profile">个人设置</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                {this.props.children}
            </div>
        )
    }
}