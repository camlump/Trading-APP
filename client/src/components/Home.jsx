import React, { Component } from 'react'
import axios from 'axios'
import * as ReactBooStrap from "react-bootstrap"





export default class Home extends Component {
    state = {
       

        symbol: {
            enteredSymbol: ' ',
            name: ' ',
        },

        userAccount: []

       

       
        
        
    }

    getReosources = () =>{
        axios.get('/api/resource/').then((response)=>{
            const foundResource = response.data;
            this.setState({

            })
        })
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
                <ReactBooStrap.Navbar bg="dark" variant="dark">
    <ReactBooStrap.Navbar.Brand href="#home">Navbar</ReactBooStrap.Navbar.Brand>
    <ReactBooStrap.Nav className="mr-auto">
      <ReactBooStrap.Nav.Link href="#home">Home</ReactBooStrap.Nav.Link>
      <ReactBooStrap.Nav.Link href="#features">Features</ReactBooStrap.Nav.Link>
      <ReactBooStrap.Nav.Link href="#pricing">Pricing</ReactBooStrap.Nav.Link>
    </ReactBooStrap.Nav>
    <ReactBooStrap.Form onSubmit={this.onSubmitSymbol} inline>
      <ReactBooStrap.FormControl type="text" name="enteredSymbol" onChange={this.changeInput} placeholder="Enter Stock Symbol" className="mr-sm-2" />
      <ReactBooStrap.FormControl type="submit" value="Search"/>
    </ReactBooStrap.Form>
  </ReactBooStrap.Navbar>
  <br />
  
                <div>
                    {/* <h2>Search Stocks</h2>
                    <form onSubmit={ this.onSubmitSymbol}>
                        <input type="text" name="enteredSymbol" onChange={this.changeInput} placeholder="Enter Stock symbol" />
                        <input type="submit" value="Search"/>
                    </form> */}

                    <div>
                            <h2> {this.state.stockName}</h2>
                                <p>Current price: { this.state.currentPrice}</p>
                                <p>Open price:{this.state.currentPrice}</p>
                                    <p> High price: {this.state.highPrice}</p>
                           
                           
                            
                    </div>
                </div>

               

                
                
            </div>
        )
    }
}
