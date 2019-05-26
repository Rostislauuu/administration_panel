import React, {Component} from 'react';
import './main-site.css'

class Content extends Component{
    constructor(props){
        super(props)
        this.state = {
            usersData: [],
        }
    }

//     componentDidMount(){
//         fetch('https://enigmatic-beach-90997.herokuapp.com/api/content')
//         .then(response => response.json())
//         .then(result => this.setState({
//             isDataLoaded: true,
//             usersData: result
//         }))
//     }



//     render(){

//         if(!this.state.isDataLoaded){
//             return "Wait";
//         }else{
//             return(
//                 <div className="content">
//                     <ul>
//                         {this.state.usersData.map(item =>(
//                             <li key={item.id}>
//                                 {item.first_name}
//                             </li>
//                         ))}   
//                     </ul> 
//                 </div>
//             )
//     }
// }

    render(){
        return(
            <div>
                
            </div>
        )
    }

}

export default Content;