import React, {Component} from 'react';
import logo from './logo.svg';

class Header extends Component{
    constructor(props){
        super(props);
    };

    render(){
        return(
            <header className="header">
                <img src={logo} className="logo"></img>
            </header>
        )
    }
}

export default Header;