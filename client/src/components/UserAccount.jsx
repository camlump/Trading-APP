import React, { Component } from 'react'
import axios from 'axios'
import Navbar from './navbar'


export default class UserAccount extends Component {
    state = {
        users: [],
        user: {
            stockShares: 0,
            accountBalance: 0,
        },

        newAccountBalance: '',


        stocks: []
    }

    getUsers = () =>{
        axios.get('/api/user').then((response)=>{
            this.setState({
                users: response.data.accountBalance
            })
        })
    }

    changeInput = (event) =>{
     let updatedbalance = this.state.user.newAccountBalance
     console.log(updatedbalance)
     updatedbalance = event.target.name

         this.setState({
                accountBalance: event.target.value += parseInt(this.state.user.updatedbalance)

         })
      
    }

    onSubmitValue = (event) =>{
            event.preventDefault()
            axios.post('/api/user', this.state.user).then(()=>{
                this.setState({
                    accountBalance: event.target.value
                })
            })
    }

    


    


    
    render() {
        
        return (
            
            <div>
                <Navbar />
                <h2>My Account</h2>
                    <form onSubmit={this.onSubmitValue}>
                    <input type="text" name="accountbalance" onChange={ this.changeInput} placeholder="enter value"/>
                    <input type="submit" value="Add"/>

                    </form>
               
                <div>
                <h2>Balance: {this.state.newAccountBalance}</h2>
                </div>
            </div>
        )
    }
}
