import React, {Component} from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Content from './Content';

class MainSite extends Component{
    constructor(props){
        super(props)
        this.state = {}
    }

    render(){
        return(
            <div>
                <Header />
                <Sidebar />
                <Content />
            </div>
        )
    }
}

export default MainSite;