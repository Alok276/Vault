import React from "react";
import Header from "../Header/Header";
import './Dashboard.css'

class Dashboard extends React.Component{

    constructor(props){
        super(props);
        this.state={

        }
    }

    render(){
        const {onRouteChange} = this.props
        return(
            <div>
                <Header/>
                <ul>
                    <li>Name</li>
                    <li>E-mail</li>
                    <li>Mobile Number</li>
                    <li>Change Security pin</li>
                    <li>Documents</li>
                    <li>Transaction</li>
                    <li className="signout" onClick={()=>onRouteChange('signin')}
                    >Sign out</li>
                </ul>
            </div>
        )
    }
}

export default Dashboard;