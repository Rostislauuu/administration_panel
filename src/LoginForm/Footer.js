import React, {Component} from 'react';

class Footer extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="footer">
               <span className="created-by-text">Created by:</span>
                <a href="https://www.instagram.com/_rostislau_/">
                    <span className="rostik-hyperlink">Sheketa Rostik</span>
                </a>
                <span className="and-text">and</span> 
                <a href="https://github.com/Misha7776">
                    <span className="misha-hyperlink">Push Misha</span>
                </a>
            </div>
        )
    }
}

export default Footer;