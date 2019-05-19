import React, {Component} from 'react';
import './content.css'

class Content extends Component{
    constructor(props){
        super(props)
        this.state = {}
    }

    render(){
        return(
            <p className="content">Hello</p>
        )
    }
}

export default Content;