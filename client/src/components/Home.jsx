import React, { Component } from 'react'
import axios from 'axios'
import * as ReactBootStrap from "react-bootstrap"
import { Link } from 'react-router-dom'






export default class Home extends Component {
    state = {
       

        symbol: {
            enteredSymbol: ' ',
            
        },

        user: { },
       

}

getUsers = () =>{
    axios.get('/api/user').then((response)=>{
        const foundUser = response.data[0]
        console.log(foundUser)
        this.setState({
            user: foundUser,
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

    

    //end of api calls for getting stock information

    //start of buying stocks for the user account

    buyStock = (event) =>{
        event.preventDefault()
        axios.get(`https://finnhub.io/api/v1/quote?symbol=${this.state.symbol.enteredSymbol}&token=bq3klmvrh5rb0pdpe5ng`).then((response)=>{
            
            let current = parseInt(response.data.c);
                console.log(current)
            
            let balance = parseInt(this.state.user.accountBalance);
            console.log(balance)
           
            let updatedStockShares = parseInt(this.state.user.stockShares);
            console.log(updatedStockShares)
            // const newStockShares = {...this.state.user.stockShares}
            if ( balance > current) {
                
                this.setState({
                  accountBalance: balance -= current,
                  stockShares: updatedStockShares += 1
                })

            } else {
                alert('you do not have enough moeny for a share in this stock');
            }

                
        })
       
    }
   

    componentDidMount(){
        this.getUsers()
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
                          <ReactBootStrap.Container>
  <ReactBootStrap.Row>
    <ReactBootStrap.Col>
        <ReactBootStrap.Card style={{ width: '18rem' }}>
                            
                            <ReactBootStrap.Card.Body>
                                <ReactBootStrap.Card.Title>{this.state.stockName}</ReactBootStrap.Card.Title>
                                </ReactBootStrap.Card.Body>
                                    <ReactBootStrap.ListGroup className="list-group-flush">
                                        <ReactBootStrap.ListGroupItem >Current price: { this.state.currentPrice}</ReactBootStrap.ListGroupItem>
                                        <ReactBootStrap.ListGroupItem>Low price: { this.state.lowPrice}</ReactBootStrap.ListGroupItem>
                                        <ReactBootStrap.ListGroupItem>High price: { this.state.highPrice}</ReactBootStrap.ListGroupItem>
                                    </ReactBootStrap.ListGroup>
                                    <ReactBootStrap.Card.Body>
                                    <ReactBootStrap.Button onClick={ this.buyStock } variant="dark">Buy Share</ReactBootStrap.Button>
                                {/* <ReactBootStrap.Card.Link href="#">Another Link</ReactBootStrap.Card.Link> */}
                                </ReactBootStrap.Card.Body>
                            </ReactBootStrap.Card>
                        </ReactBootStrap.Col>
    <ReactBootStrap.Col> 
                <Link to="/users"><h2>Users here</h2></Link>
        <ReactBootStrap.Card className="circle">
                        <ReactBootStrap.Card.Title>User: $ {this.state.user.accountBalance}</ReactBootStrap.Card.Title>
                                       <ReactBootStrap.Card.Title>shares: {this.state.user.stockShares } </ReactBootStrap.Card.Title>
                                     </ReactBootStrap.Card>
                                     </ReactBootStrap.Col>
                            </ReactBootStrap.Row>
            </ReactBootStrap.Container>

                    <div>
                    

                          

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
