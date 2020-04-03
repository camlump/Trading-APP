import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import { response } from 'express';

export default class ResourceList extends Component {
    state ={
        resources: [],
        newResource: {
            name: ''

        },
        resourceForm:false

    }

    getReources = ()=>{
        axios.get('/api/resource').then((response)=>{
            const foundResource = response.data;
            this.setState({
                resources: foundResource
            });
        });
    }

    changeInput =(event)=> {
        const addedResource = {...this.state.newResource}
            addedResource[event.target.name] = event.target.value
            this.setState({
                newResource: addedResource
            })
    }

    toggleResourceForm = ()=>{
        const newResourceForm = !this.state.resourceForm
            this.setState({
                resourceForm: newResourceForm
            })
    }

    onSubmitResource = (event) => {
        event.prevenDefault();
        axios.post('/api/resource', this.state.newResource).then(()=>{
            this.toggleResourceForm();
            this.getReources();
        })
    }

    componentDidMount(){
        this.getReources();
    }
    render() {
        return (
            <div>
                <div>
                    <button className="togglebutton" onClick={this.toggleResourceForm}>Add Resource</button>
                </div>
                <br/>
                <br/>
                <div>
                    {
                        this.state.resourceForm ? <form onSubmit={this.onSubmitResource }>
                            <input type="text" name="name" onChange={this.changeInput} placeholder="Name"/>
                            <input type="text" name="description" onChange={this.changeInput} placeholder="Description"/>
                            <input type="text" name="image" onChange={this.changeInput} placeholder="image"/>
                            <input type="text" name="URL" onChange={this.changeInput} placeholder="URL here"/>
                            <input type="submit" value="Add"/>

                        </form> : null
                    }
                </div>
                
            </div>
        )
    }
}
