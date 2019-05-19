import React, {Component} from 'react';
import './loginForm.css';

class SubmitButton extends Component{
    constructor(props){
        super(props)
    };

    render(){
        return(
            <div>
                <button className="submit-element">
                Login
                </button>
            </div>
        )
    }
}

export default SubmitButton;