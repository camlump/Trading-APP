import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

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
        return (
            <div>
                
            </div>
        )
    }
}
