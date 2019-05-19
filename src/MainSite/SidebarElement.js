import React, {Component} from 'react';

class SidebarElement extends Component{
    constructor(props){
        super(props)
        this.state = {}
    }

    render(){
        return(
            <div className="sidebar-element">
                <h3>{this.props.name}</h3>
            </div>
        )
    }
}

export default SidebarElement;