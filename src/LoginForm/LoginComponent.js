import React, {Component} from 'react';
import './loginForm.css';

class LoginComponent extends Component{

    constructor(props){
        super(props);
    };

    // loginSubmit = (event) =>{
    //     event.preventDefault();
    //     console.log('login is submitted', this.state.login);
    // };
    
    // loginChange = (event) =>{
    //     console.log(event.target.value);
    //     this.setState({
    //         login: event.target.value
    //     });
    // };

    render(){
        return(
            <div className="login-element">
                    <input 
                        id={this.props.id}
                        type={this.props.type}
                        name={this.props.name}
                        placeholder={this.props.placeholder}  
                        className="input-element" 
                    >

                    </input>
            </div>  
        )
    }
}

export default LoginComponent;