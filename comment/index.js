//导入reactdom
import React from 'react';
import ReactDOM from 'react-dom';
require('bootstrap/dist/css/bootstrap.css');
//导入容器组件
import {CommentBox} from './containers';

//把留言板组件渲染到页面的ID为app的div内部
ReactDOM.render(
    <CommentBox/>,
    document.querySelector('#app')
);
