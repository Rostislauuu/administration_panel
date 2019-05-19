import React, {Component} from 'react';
import SidebarElement from './SidebarElement';
import './sideBar.css';

class Sidebar extends Component{
    constructor(props){
        super(props)
        this.state = {}
    }

    render(){
        return(
            <aside className="root-sidebar">
                <SidebarElement name="Statistics"/>
                <SidebarElement name="Info" />
            </aside>
        )
    }
}

export default Sidebar;