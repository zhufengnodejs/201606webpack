import React from 'react';
export default class CommentList extends React.Component{
    render(){
        return (
                <div className="row">
                    <div className="col-xs-12">
                        <ul className="list-group">
                            <li className="list-group-item">张三:今天天气真好  1小时以前</li>
                            <li className="list-group-item"> 李四:是呀，好大冰雹呀  10分钟以前</li>
                        </ul>
                    </div>
                </div>
        )
    }
}