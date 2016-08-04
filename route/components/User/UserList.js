import React from 'react';
export default class UserList extends React.Component{
    render(){
        return (
            <ul className="list-group">
                <li className="list-group-item">1:张三</li>
                <li  className="list-group-item">2:李四</li>
            </ul>
        )
    }
}