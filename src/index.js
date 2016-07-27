import {name} from './component'
console.log(name);
import $ from 'jquery';
require('./less/index.less');
$('#app').html(name);
//加载到了bootstrap的样式文件
require('bootstrap/dist/css/bootstrap.css');
//创建一个图片
var img = document.createElement('img');
//指定源文件
img.src= require('./imgs/sunflower.jpg');
//指定使用的样式
img.className = 'img-circle';
//把当前的图片插入到当前的文档里
document.body.appendChild(img);




/*
var xhr = new XMLHttpRequest;
xhr.open('GET','/api/users',true);
xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && /2\d{2}/.test(xhr.status)){
        document.write(xhr.responseText);
    }
}
xhr.send();*/
