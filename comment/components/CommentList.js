import React from 'react';
import Comment from './Comment';
export default class CommentList extends React.Component{
    render(){
        return (
                <div className="row">
                    <div className="col-xs-12">
                        <ul className="list-group">
                            <Comment>张三:今天天气真好  1小时以前</Comment>
                            <Comment>李四:是呀，好大冰雹呀  10分钟以前</Comment>
                        </ul>
                    </div>
                </div>
        )
    }
}