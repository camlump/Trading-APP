import React, { Component } from 'react'
import axios from 'axios';
import { Redirect} from 'react-router-dom'
import Navbar from './navbar'

export default class SingleComment extends Component {
        state = {
            comment: {},
            redirectoHome: false,
            editComment: {
                name:'',
                description:''
            },
        }

        getComment = () =>{
            const commentId = this.props.match.params.commentId;
            axios.get('/api/comments/' + commentId).then((response)=>{
                this.setState({
                    comment: response.data,
                    editComment: response.data
                })
            })
        }

        changeInput = (event)=>{
            const updatedComment = {...this.state.editComment}
            updatedComment[event.target.name] = event.target.value;
            this.setState({
                editComment: updatedComment
            })
        }

        submitEditForm = (event) =>{
            event.preventDefault();
            const commentId = this.props.match.params.commentId;
            axios.put('/api/comments/' + commentId, this.state.editComment).then(()=>{
                    this.getComment()
            })
        } 
        deleteComment = ()=>{
            const commentId = this.props.match.params.commentId;
            axios.delete('/api/comment/' + commentId).then(()=>{
                this.setState({
                    redirectoHome: true
                })
            })
        }  
        
        componentDidMount(){
            this.getComment()
        }
        render() {
            if(this.state.redirectoHome){
                return <Redirect to="/" />
            }
            if(this.state.redirectoHome){
                return <Redirect to="/" />
            }
            
            
            
            const {name, description} = this.state.comment
        return (
            <div>
                <Navbar />
                <div>
                <h2>name: { name}</h2>
                <p>comment: { description}</p>
                </div>

                <div>
                    <form onSubmit={this.submitEditForm}>
                        <input type="text" name="name" value={this.state.editComment.name} onChange={ this.changeInput } placeholder="change name"/> <br/> <br/>
                        <input type="text" name="description" value={this.state.editComment.description} onChange={ this.changeInput} placeholder="comment"/> <br/> <br/>
                        <input type="submit" value="update"/>
                    </form>
                </div>
                    <button onClick={this.deleteComment}>Delete</button>
            </div>
        )
    }
}
