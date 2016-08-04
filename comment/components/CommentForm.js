import React from 'react';
export default class CommentForm extends React.Component{
    render(){
        return (
            <div className="container">
                <div className="row">
                    <form className="form-horizontal">
                        <div className="form-group">
                            <label className="control-label col-xs-1" htmlFor="username">姓名</label>
                            <div className="col-xs-11">
                                <input className="form-control" type="text"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="control-label col-xs-1" htmlFor="content">留言</label>
                            <div className="col-xs-11">
                                <textarea name="content" className="form-control" id="content" cols="30" rows="10"></textarea>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-xs-offset-1 col-xs-11">
                                <button className="btn btn-primary">发言</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}