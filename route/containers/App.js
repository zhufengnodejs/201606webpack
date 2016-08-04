import React from 'react';
import {Home,Profile,User} from '../components';

export default class App extends React.Component{
    render(){
        return (
            <div>
                <Home/>
                <Profile/>
                <User/>
            </div>
        )
    }
}