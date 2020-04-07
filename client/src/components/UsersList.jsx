import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Navbar from './navbar'

export default class UsersList extends Component {

    state = {
        users: [],
        newUsers: {
            name: '',
         
        },
        userForm: false,
    }
    getUsers = () =>{
        axios.get('/api/user').then((response)=>{
            this.setState({
                users: response.data
            })
        })
    }
        
        changeInput = (event)=>{
            const addUser = {...this.state.newUsers}
            addUser[event.target.name] = event.target.value;
            this.setState({
                newUsers: addUser
            })
        }

        toggleUserForm = () =>{
            const newUserForm = !this.state.userForm
            this.setState({
                userForm: newUserForm
            })
        }

        onSubmitUser = (event) => {
            event.preventDefault();
            axios.post('/api/user', this.state.newUsers).then(()=>{
                this.toggleUserForm()
                this.getUsers()
            })
        }

        componentDidMount(){
            this.getUsers()
        }
     


    render() {
        return (
            <div>
                <Navbar />
                  <div>
                    <button className="togglebutton" onClick={this.toggleUserForm}>Add User</button>
                </div>
                <br/>
                <br/>
                <div>
                    {
                        this.state.userForm ? <form onSubmit={this.onSubmitUser}>
                            <input type="text" name="name" onChange={this.changeInput} placeholder="Name"/> <br/> <br/>

                            <input type="text" name="city" onChange={this.changeInput} placeholder="city"/> <br/> <br/>

                            <input type="text" name="state" onChange={this.changeInput} placeholder="state"/> <br/>
                            <input type="text" name="accountBalance" onChange={this.changeInput} placeholder="enter value"/> <br/> <br/>

                            <input type="submit" value="Add"/>

                        </form> : null
                    }
                </div>
                <br/>
                <br/>
                <h3>portfolio</h3>
                <div className="userList">

                {
                       this.state.users.map((user, i)=>{
                           return (
                               <div key={i}>
                                   <Link to={'users/' + user._id}><h2>{ user.name }</h2></Link>

                               </div>
                           )

                       })
                   }
                </div>
                
            </div>
        )
    }
}
