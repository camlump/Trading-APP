import React, { Component } from 'react'
import axios from 'axios'
import * as ReactBootStrap from "react-bootstrap"






export default class Home extends Component {
    state = {
       

        symbol: {
            enteredSymbol: ' ',
            name: ' ',
        },

        userAccount: []

       

       
        
        
    }



    
//functions for stock api calls
    changeInput = (event) =>{
        const newSymbol = {...this.state.symbol}
        newSymbol[event.target.name] = event.target.value
        this.setState({
            symbol: newSymbol
        })
    }

    onSubmitSymbol = (event) =>{
        event.preventDefault();
        axios.get(`https://finnhub.io/api/v1/quote?symbol=${this.state.symbol.enteredSymbol}&token=bq3klmvrh5rb0pdpe5ng`).then((response)=>{
            const current = response.data.c;
            const high = response.data.h;
            const low = response.data.l;
            const open = response.data.o;
            const close = response.data.pc;
            const timeStamp = response.data.t;

  
            this.setState({
                currentPrice: current,
                highPrice: high,
                lowPrice: low,
                openPrice: open,
                closePrice: close,
                time: timeStamp,
            })
        
            return axios.get('https://finnhub.io/api/v1/stock/symbol?exchange=US&token=bq3klmvrh5rb0pdpe5ng')
        }).then((name)=>{
            const newName = name.data;
            for(let i = 0; i < newName.length; i++){
                if ( newName[i].displaySymbol === this.state.symbol.enteredSymbol){
                    this.setState({

                        stockName: newName[i].description
                      
                    })
                   
                }
               


            }
        })
    }
    
    
    
    
    

   

 
   


    
    render() {
        return (
            <div>
                <ReactBootStrap.Navbar bg="dark" variant="dark">
    <ReactBootStrap.Navbar.Brand href="#home">The Stock App</ReactBootStrap.Navbar.Brand>
    <ReactBootStrap.Nav className="mr-auto">
      <ReactBootStrap.Nav.Link href="#home">Home</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="/resources">Resources</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="http://eoddata.com/symbols.aspx" target="_blank">Symbols</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="/account">My Account</ReactBootStrap.Nav.Link>
    </ReactBootStrap.Nav>
    <ReactBootStrap.Form onSubmit={this.onSubmitSymbol} inline>
      <ReactBootStrap.FormControl type="text" name="enteredSymbol" onChange={this.changeInput} placeholder="Enter Stock Symbol" className="mr-sm-2" />
      <ReactBootStrap.FormControl type="submit" value="Search"/>
    </ReactBootStrap.Form>
  </ReactBootStrap.Navbar>
  <br />
  
                <div>
                  

                    <div>
                    <ReactBootStrap.Card style={{ width: '18rem' }}>
                            
                            <ReactBootStrap.Card.Body>
                                <ReactBootStrap.Card.Title>{this.state.stockName}</ReactBootStrap.Card.Title>
                                </ReactBootStrap.Card.Body>
                                    <ReactBootStrap.ListGroup className="list-group-flush">
                                        <ReactBootStrap.ListGroupItem onclick={ this.buyStock }>Current price: { this.state.currentPrice}</ReactBootStrap.ListGroupItem>
                                        <ReactBootStrap.ListGroupItem>Low price: { this.state.lowPrice}</ReactBootStrap.ListGroupItem>
                                        <ReactBootStrap.ListGroupItem>High price: { this.state.highPrice}</ReactBootStrap.ListGroupItem>
                                    </ReactBootStrap.ListGroup>
                                    <ReactBootStrap.Card.Body>
                                <ReactBootStrap.Card.Link href="#">Buy Share</ReactBootStrap.Card.Link>
                                {/* <ReactBootStrap.Card.Link href="#">Another Link</ReactBootStrap.Card.Link> */}
                                </ReactBootStrap.Card.Body>
                            </ReactBootStrap.Card>



                                    {/* <h2> {this.state.stockName}</h2>
                                     <p>Current price: { this.state.currentPrice}</p>
                                <p>Low price:{this.state.lowPrice}</p>
                                    <p> High price: {this.state.highPrice}</p> */}
                           
                           
                            
                    </div>
                </div>

               

                
                
            </div>
        )
    }
}
