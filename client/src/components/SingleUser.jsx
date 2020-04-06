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
        editForm: false,
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
        const userId = this.state.props.match.params.userId;
        axios.post('/api/user/' + userId, this.state.editUser).then(()=>{
            this.getUser()
        })
    }

    toggleEdiform = () =>{
        const newEditForm = !this.state.editForm
        this.setState({
            editForm: newEditForm
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

        const { name, accountBalance, stockShares, state, city} = this.state.user
        return (
            <div>
                <div>
                <h3>Username: { name }</h3>
             <p>Balance: { accountBalance }</p>
        <p>Shares: { stockShares }</p>

                </div>

                <button onClick={this.toggleEdiform}>edit User</button>

                {
                    this.state.editForm ? <div>
                     <form onSubmit={ this.sumbitEditForm }>
                        Edit Name: <input type="text" name="name" value={ name } onChange={ this.changeInput } placeholder="change name"/> <br/> <br/>
                       Edit City: <input type="text" name="city" value={ city } onChange={ this.changeInput} placeholder=" change state"/> <br/> <br/>
                       Edit State: <input type="text" name="state" value={ state } onChange={ this.changeInput } placeholder="change state"/> <br/> <br/>
                        <input type="submit" value="update"/>

                    </form>
                </div> : null
            } 
            </div>
        )
    }
}
