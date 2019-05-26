import React, {Component} from 'react';
import Header from './Header';
import {Chart} from 'react-charts';

class MainSite extends Component{
    constructor(props){
        super(props);
        this.state = {
            isUsersOpen: false,
            isActivityOpen: false,
            isSettingsOpen: false,
            data: []
        };
    }

    componentDidMount(){
        fetch('https://enigmatic-beach-90997.herokuapp.com/api/content')
        .then(response => response.json())
        .then(result => this.setState({
            data: result
        }))
    }

    usersOpen = () => {
        this.setState({
            isUsersOpen: !this.state.isUsersOpen
        })
    }

    activityOpen = () => {
        this.setState({
            isActivityOpen: !this.state.isActivityOpen
        })
    }

    settingsOpen = () => {
        this.setState({
            isSettingsOpen: !this.state.isSettingsOpen
        })
    }

    usersContent = () => {
        const usersData = this.state.data;

        if(this.state.isUsersOpen){
            return(
                <div className="users-content"> 
                    <table className="table">
                        <tbody>
                            <tr>
                                <th>Firstname</th>
                                <th>Lastname</th>
                                <th>Username</th>
                            </tr>
                            
                            {usersData.users.map(user => (
                                <tr key={user.id}>
                                    <td>{user.first_name}</td>  
                                    <td>{user.last_name}</td>
                                    <td>{user.username}</td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>
            )
        }
    }

    activityContent = () => {

        const data = [
            {
              label: "Series 1",
              data: [{ x: 1, y: 30 }, { x: 2, y: 30 }, { x: 4, y: 40 }]
            },
            {
              label: "Series 2",
              data: [{ x: 1, y: 20 }, { x: 2, y: 30 }, { x: 3, y: 40 }]
            },
            {
              label: "Series 3",
              data: [{ x: 1, y: 40 }, { x: 2, y: 10 }, { x: 3, y: 10 }]
            }
          ];

        if(this.state.isActivityOpen){
            return(
                <div className="activity-content">
                    <Chart data={data}
                        axes={[
                        { primary: true, type: "linear", position: "bottom" },
                        { type: "linear", position: "left" }
                        ]}
                />
                </div>
            )
        }

    }

    settingsContent = () => {
        if(this.state.isSettingsOpen){
            return(
                <div className="settings-content">Hello</div>
            )
        }
    }

    render(){
        return(
            <div>
                <Header />
                <div className="root-sidebar">
                    <section className="sidebar-element-users">
                        <h4 onClick={this.usersOpen}>
                            Users
                        </h4>
                        {this.usersContent()}
                    </section>

                    <section className="sidebar-element-activity">
                        <h4 onClick={this.activityOpen}>
                            Activity
                        </h4>
                        {this.activityContent()}
                    </section>

                    <section className="sidebar-element-settings">
                        <h4 onClick={this.settingsOpen}>
                            Settings
                        </h4>
                        {this.settingsContent()}
                    </section>

                </div>

            </div>

        )
    }
}

export default MainSite;