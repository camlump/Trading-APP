import React, { Component } from 'react'
import axios from 'axios'

export default class UsersList extends Component {

    state = {
        users: [],
        newUsers: {
            name: '',
            accountBalance
        },
        userForm: false,
    }
    getUsers = () =>{
        axios.get('/api/user').then((response)=>{
            this.setState({
                users: response.data
            })
        })
        
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

        this.componentDidMount(){
            this.getUsers()
        }


    render() {
        return (
            <div>
                  <div>
                    <button className="togglebutton" onClick={this.toggleUserForm}>Add Resource</button>
                </div>
                <br/>
                <br/>
                <div>
                    {
                        this.state.resourceForm ? <form onSubmit={this.onSubmitUser}>
                            <input type="text" name="name" onChange={this.changeInput} placeholder="Name"/>
                            <input type="text" name="description" onChange={this.changeInput} placeholder="Description"/>
                            <input type="text" name="image" onChange={this.changeInput} placeholder="image"/>
                            <input type="text" name="URL" onChange={this.changeInput} placeholder="URL here"/>
                            <input type="submit" value="Add"/>

                        </form> : null
                    }
                </div>
                
            </div>
        )
    }
}
