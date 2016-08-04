import React from 'react';
import {CommentForm,CommentList} from '../components'
export default class CommentBox extends React.Component{
    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <h3>珠峰留言版</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                        <CommentList></CommentList>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                        <CommentForm></CommentForm>
                    </div>
                </div>
            </div>
        )
    }
}