import NestedReply from "./nestedReply.js"
import React, { Component } from 'react';
import '../css/home.css';

class FullcardWithDetail extends Component {
    state = {
        comments:[],
        comInput: '',
        displayNestedReply:"none",
    }

    commentField = (e) => {
        this.setState({ comInput: e.target.value })
    }
    addComment=()=>{
        let comments = this.state.comments;
        comments.push(this.state.comInput)
        console.log(comments)
        this.setState({comInput:''})
        this.forceUpdate()
    }
   

    nestedReply=()=>{
        this.setState({displayNestedReply:"block"})
    }

    render() {
        return (
            <div className="row fullCards">
                <div className="col-md-12">
                    <div className="card">
                        <div className="box">
                            <div className="img">
                                <img src={this.props.child.childImage} />
                            </div>
                            <h2>{this.props.child.childName}</h2>
                            <p>{this.props.child.childDescrip}</p>       
                        </div>
                        <div className="position-fixed">
                        <ul>
                            {this.state.comments
                                .map( (comment, i) => {
                                   return <MapInComment comment={comment} key={i}/>
                                }

                            )
                        }
                            </ul>
                            <div class="input-group input-margin">
                                <input className="form-control" type="text" placeholder="Write a comment" value={this.state.comInput} onChange={this.commentField}/>
                                <div className="input-group-btn">
                                    <button type="button" class="btn btn-default " onClick={this.addComment}>Send</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class MapInComment extends Component{
    state={
        showReplies:false,
    }
    render(){
        return(
            <li>
                <b>{this.props.comment}</b>
                <br></br>
                <span className="text-sm-left" onClick={() => this.setState({showReplies:true})}>
                    reply
                    <br></br>
                    <NestedReply displayNestedReply={this.state.showReplies}/>
                </span>
            </li>  
        )
    }
}

export default FullcardWithDetail;