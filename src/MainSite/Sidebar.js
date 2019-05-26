import React, {Component} from 'react';
import SidebarElementUsers from './SidebarElementUsers';
import './main-site.css';

class Sidebar extends Component{
    constructor(props){
        super(props)
        this.state = {}
    }

    render(){
        return(
            <nav className="root-sidebar">
                <ul className="list">
                    <li>
                        <SidebarElementUsers name="Users"/>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Sidebar;