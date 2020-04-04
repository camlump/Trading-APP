import React, { Component } from 'react'
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom'
import Navbar from './navbar'

export default class singleResource extends Component {
    state = {
        resource: {},
        redirectToResources: false,
        editResource: {},
    }

    getReource = ()=>{
        const resourceId = this.props.match.params.resourceId;
        axios.get('/api/resource/' + resourceId).then((response)=>{
            const foundResource = response.data;
            this.setState({
                resource: response.data,
                editResource: response.data
            });
        });
    }

    changeInput = (event) =>{
        const editedResource = {...this.state.editResource}
        editedResource[event.target.name] = event.target.value;
            this.setState({
                editResource: editedResource
            })
    }

    submitEditForm = (event) =>{
        event.preventDefault();
        const resourceId = this.props.match.params.resourceId;
        axios.put('/api/resource/' + resourceId, this.state.editResource).then(()=>{
                this.getReource()
        })
    }

    deleteResource = () =>{
        const resourceId =  this.props.match.params.resourceId;
        axios.delete('/api/resource/' + resourceId).then(()=>{
            this.setState({
                redirectToResources: true
            });
        });
    }

    componentDidMount(){
        this.getReource()
    }
    render() {

        
        if(this.state.redirectToResources){
            return <Redirect to="/resources" />
        }
       
        
        
        const { name, description, image, URL} = this.state.resource
        return (
            <div>
                <Navbar/>
                <img src={ image } alt="resource image"/>
                <h2>{name }</h2>
             <p>{description}</p>
              <a href={URL} target="_blank">Link here</a>
                
                <form onSubmit={ this.submitEditForm}>
                <input type="text" name="name" value={this.state.editResource.name} onChange={this.changeInput}/>
                            <input type="text" name="description" value={ this.state.editResource.description} onChange={this.changeInput} />
                            <input type="text"  name="image" value={ this.state.editResource.image}  onChange={this.changeInput} />
                            <input type="text" name="URL" value={ this.state.editResource.URL}  onChange={this.changeInput} />
                            <input type="submit" value="Update"/>
                </form>
                <button onClick={this.deleteResource}>Delete</button>
            </div>
        )
    }
}
