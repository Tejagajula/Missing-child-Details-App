import React, {Component} from "react";
import '../css/home.css'
import AddChilsDetails from './details.js'
import CardsForMissingChild from './cards.js'
import {Link} from 'react-router-dom';
import axios from 'axios'


class HomePage extends Component{
    constructor(props){
        super(props)
        this.state={
            visibility:"none",
            file: null,
            missingChildName: '',
            Description:'',
            displaycard:"block",
        }
    }

     addChildDisplay=()=>{
        this.setState({
            visibility:"block", displaycard:"none"
        })
    }
    
   
    fileChangedHandler = (event) => {
        this.setState({
            file: event.target.file,
            [event.target.name]:event.target.value,

        })
        console.log(event.target.value);
      }
      
    postData=()=>{
        this.setState({
            visibility:"none",
            displaycard:"block"
        })
  
        const formData = new FormData();
        formData.append('file', this.state.file);
        formData.append('missingChildName', this.state.missingChildName);
        formData.append('Description', this.state.Description);

        axios.post('https://missingchild.herokuapp.com/create/missingChildren/details', formData)
        .then(res=>{
            console.log(res);
        })
        .catch(err=>{
            console.log(err);
        });
    }

    render(){
        return(
            <div className="homepage">
               <nav className="navbar navbar-inverse">
                    <div className="navbar-header">
                        <button className="navbar-toggle" type="button" data-toggle="collapse" data-target=".js-navbar-collapse">
                            <span className="sr-only"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#">Missing Child</a>
                    </div>
                    <div className="collapse navbar-collapse js-navbar-collapse" id="navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            <li className="dropdown-toggle"><a href="">Home</a></li> 
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li><Link to="/signup"><span className="glyphicon dropdown-toggle glyphicon-user"></span> Sign Up</Link></li>
                            <li><Link to="/login"><span className="glyphicon dropdown-toggle glyphicon-log-in"></span> Login</Link></li>
                        </ul>
                    </div>
                </nav>
                <div className="headingImg">         
                    <h1 className="text-center rainbow font-style"><img src="https://image.flaticon.com/icons/png/512/42/42978.png" className="w-12"/>Missing Child</h1>
                </div>
                <AddChilsDetails {...this.state} {...this.props} postData={this.postData} fileChangedHandler={this.fileChangedHandler}/>
                <CardsForMissingChild displaycard={this.state.displaycard}/>
                <AddButton addChildDisplay={this.addChildDisplay}/>
            </div>
        )
    }
};     


class AddButton extends Component{
    render(){
        return(
            <div id="addChild">
                <button type="button" class="btn btn-warning btn-circle btn-xl"  onClick={this.props.addChildDisplay}>+</button>
            </div>
        )
    }
}

export default HomePage;