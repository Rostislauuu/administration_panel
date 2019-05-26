import React, {Component} from 'react';
import './main-site.css'

class Header extends Component{
    constructor(props){
        super(props)
        this.state = {}
    }

    render(){
        return(
            <header className="root-header"> 
                    <h1 className="header-text">Administration Panel</h1>
            </header>
        )
    }
}

export default Header;