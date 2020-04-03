import React, { Component } from 'react'
import axios from 'axios'




export default class Home extends Component {
    state = {
       

        symbol: {
            enteredSymbol: ' ',
            name: ' ',
        }

       
        
        
    }
   getCompanyName = () =>{
       
   }

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
            const res = response.data;
            this.setState({
                stockPrices: res
            })
        })
    }
    
    
    
    

   

 
   


    
    render() {
        return (
            <div>
                <div>
                    <h2>Search Stocks</h2>
                    <form onSubmit={ this.onSubmitSymbol}>
                        <input type="text" name="enteredSymbol" onChange={this.changeInput} placeholder="Enter Stock symbol" />
                        <input type="submit" value="Search"/>
                    </form>
                </div>

               

                
                
            </div>
        )
    }
}
