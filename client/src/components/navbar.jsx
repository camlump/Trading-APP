import React, { Component } from 'react'
import * as ReactBootStrap from "react-bootstrap"
export default class navbar extends Component {
    render() {
        return (
            <div>
                <ReactBootStrap.Navbar bg="dark" variant="dark">
                    <ReactBootStrap.Navbar.Brand href="#home">The Stock App</ReactBootStrap.Navbar.Brand>
                    <ReactBootStrap.Nav className="mr-auto">
                    <ReactBootStrap.Nav.Link href="/">Home</ReactBootStrap.Nav.Link>
                    <ReactBootStrap.Nav.Link href="/resources">Resources</ReactBootStrap.Nav.Link>
                    <ReactBootStrap.Nav.Link href="http://eoddata.com/symbols.aspx" target="_blank">Symbols</ReactBootStrap.Nav.Link>
                    <ReactBootStrap.Nav.Link href="/account">My Account</ReactBootStrap.Nav.Link>
                    </ReactBootStrap.Nav>
                </ReactBootStrap.Navbar>
            </div>
        )
    }
}
