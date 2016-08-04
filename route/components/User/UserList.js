import React from 'react';
import {Link} from 'react-router';
export default class UserList extends React.Component{
    constructor(props){
        super(props);
        var persons = [{id:1,name:'zhangsan'},{id:2,name:"lisi"}];
        let { query } = props.location;
        persons = persons.filter(person=>person.name.indexOf(query.keyword)!=-1);
        this.state = {persons:persons};
    }

    render(){
        return (
            <ul className="list-group">
                {
                    this.state.persons.map(person=> <li className="list-group-item">
                        <Link to={"/user/detail/"+person.id}>{person.id}:{person.name}</Link>
                    </li>)
                }
            </ul>
        )
    }
}