import React, { Component } from 'react'
import axios from 'axios'
import Navbar from './navbar'


export default class UserAccount extends Component {
    state = {
        user: {
            name:''
        }
    }
    render() {
        return (
            <div>
                <Navbar />
                <h2>My Account</h2>
            </div>
        )
    }
}