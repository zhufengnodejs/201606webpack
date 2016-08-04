import React from 'react';
import {CommentForm,CommentList} from '../components'
export default class CommentBox extends React.Component{
    render(){
        return (
            <li className="list-group-item">
                {this.props.children}
            </li>
        )
    }
}