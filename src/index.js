import {name} from './component.js'
console.log(name);
var xhr = new XMLHttpRequest;
xhr.open('GET','/api/users',true);
xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && /2\d{2}/.test(xhr.status)){
        document.write(xhr.responseText);
    }
}
xhr.send();