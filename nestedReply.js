import React, { Component } from 'react';
import '../css/home.css';

class NestedReply extends Component {
    state = {
        comments:[],
        comInput: '',
    }

    commentField = (e) => {
        this.setState({ comInput: e.target.value })
    }

    CommentByEnter=(e)=>{
        if (e.charCode == 13) {
        let comments = this.state.comments;
        comments.push(this.state.comInput)
        console.log(comments)
        this.forceUpdate();
       }
    }

    commentByBtn=()=>{
      let comments = this.state.comments;
        comments.push(this.state.comInput)
        console.log(comments)
        this.forceUpdate()
    }
   
  render() {
    return (
      <div className="nestedReply" style={{ display: this.props.displayNestedReply?'block':'none'}}>
        <ul>
            {this.state.comments.map((comment, i)=>
                    <li Key={i}>{comment}<br></br></li>
                    )
            }
            </ul>
            <div class="input-group">
              <input class="form-control" type="text" placeholder="Write a comment" value={this.state.comInput} onChange={this.commentField} onKeyPress={this.CommentByEnter}/>
              <div class="input-group-btn">
                  <button type="button" class="btn btn-default "  onClick={this.commentByBtn}>Send</button>
              </div>
          </div>
      </div>
    );
  }
}
export default NestedReply;
