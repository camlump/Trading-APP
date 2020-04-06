import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

export default class SingleUser extends Component {
    state = {
        user: {

        },
        redirectToUsers: false,
        editUser: {},

        edit: {},
    }

    getUser =()=>{
        const userId = this.props.match.params.userId;
        axios.get('/api/user/' + userId).then((response)=>{
            this.setState({
                user: response.data,
                editUser: response.data
            })
        })
    }

    changeInput = (event) =>{
        const updatedUser = {...this.state.editUser}
        updatedUser[event.taget.value] = event.target.name;
            this.setState({
                editUser: updatedUser
            })
    }

    sumbitEditForm = (event) =>{
        event.preventDefault()
        const UserId = this.state.props.match.params.userId;
        axios.post('/api/user/' + userId, this.state.editUser).then(()=>{
            this.getUser()
        })
    }

    deleteUser = () =>{
        const userId = this.props.match.params.userId;
        axios.delete('/api/user/' + userId).then(()=>{
            this.setState({
                redirectToUsers: true

            })
        })
    }

    componentDidMount(){
        this.getUser()
    }
    render() {
        if(this.redirectToUsers){
            return <Redirect to="/user" />
        }

        const { name, accountBalance, stockShares} = this.state.user
        return (
            <div>
                <h3>Username: { name }</h3>
             <p>Balance: { accountBalance }</p>
        <p>Shares: { stockShares }</p>
                
            </div>
        )
    }
}
