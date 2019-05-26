import React, {Component} from 'react';
import content from './Content';

class SidebarElementUsers extends Component{
    constructor(props){
        super(props)
        this.state = {
            usersOpen: false
        }
    }

    // componentDidMount(){
    //     fetch('https://enigmatic-beach-90997.herokuapp.com/api/content')
    //     .then(response => response.json())
    //     .then(result => this.setState({
    //         isDataLoaded: true,
    //         usersData: result
    //     }))
    // }

    // usersSlide = () => {

    //     if(!this.state.isDataLoaded){
    //         return "Wait"
    //     }else{
    //         console.log(this.state.usersData);
    //         return(
    //             <div className="content">
    //                 <ul>
    //                     {this.state.usersData.map(item =>(
    //                         <li key={item.id}>
    //                             {item.first_name}
    //                         </li>
    //                     ))}   
    //                 </ul> 
    //             </div>
    //         )
    //     }

    // }

    showUsers = () => {
        this.setState({
        usersOpen: !this.state.usersOpen
        })

        console.log(this.state.usersOpen)
    };

    render(){
        return(
            <div className="sidebar-element">
                <p onClick={this.showUsers}>{this.props.name}</p>
            </div>
        )
    }
}

export default SidebarElementUsers;