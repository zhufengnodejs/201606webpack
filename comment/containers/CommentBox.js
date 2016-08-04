import React from 'react';
import {CommentForm,CommentList} from '../components'
export default class CommentBox extends React.Component{
    // getInitialState只能用在es5里  es6 得用constructor
    constructor(props){
        super(props);
        //如果是在constructor里修改状态，不用setState,应该直接赋值
        this.state = {comments:props.comments};
    }

    submitForm(comment){
        //把这个新的comment对象保存在localStorage里了
        var comments = this.props.addComment(comment);
        this.setState({comments:comments});
    }

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
                        <CommentList comments={this.state.comments}></CommentList>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                        <CommentForm submitForm={this.submitForm.bind(this)}></CommentForm>
                    </div>
                </div>
            </div>
        )
    }
}