import React, { Component } from 'react';
import '../css/main.css';
import '../css/util.css';
import axios from 'axios';
import { Redirect } from 'react-router';



class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            emailid:'',
            password:'',
            redirect:'',
        }
    }

              
    datachange=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

   
    postData=(e)=>{
        const emailid = this.state.emailid
        const password = this.state.password

        const data = {
            emailid,
            password, 
        }
        console.log(data);
        
        axios.post('https://missingchild.herokuapp.com/user/login', data)
        .then(res=>{
            console.log(res);
            this.setState({
                message:res.data,
            });
        })
        .catch(err=>{
            console.log(err);
        });
    }
    validateLoginInp=()=>{
        this.setState({
            redirect:true
        })
    }

    displayRedirect=()=>{
        if (this.state.redirect){
            return <Redirect to={{
                pathname:'/',
                state:this.state
            }}
            />
        }
        else{
            console.log("you have to fill all the filds")
        }
    }
  render() {
    return (
      <div className="signUp">
        <div className="limiter">
            <div className="container-login100">
                <div className="wrap-login100">
                    <form  className="login100-form validate-form" onSubmit={this.postData} >
                        <span className="login100-form-logo" >
                            <i className="zmdi zmdi-landscape"></i>
                        </span>

                        <span className="login100-form-title p-b-34 p-t-27">
                            Login
                        </span>

                        <div className="wrap-input100 validate-input" data-validate = "Enter emailid">
                            <input className="input100 loginemail" type="emailid" name="emailid" autocomplete="off" placeholder="enter emailid" value={this.state.firstname} onChange={this.datachange}/>
                        </div>

                        <div className="wrap-input100 validate-input" data-validate="password">
                            <input className="input100 loginpassword" type="password" name="password" autocomplete="off" placeholder="password" value={this.state.lastname} onChange={this.datachange}/>
                        </div>

                        <div className="container-login100-form-btn">
                            <button type="submit" className="login100-form-btn"  onClick={this.validateLoginInp}>
                                Login
                            </button>
                        </div>
                    </form>
                </div>
                {this.displayRedirect()}
            </div>
        </div>
	    <div id="dropDownSelect1"></div>
      </div>             
    );
  }
}

export default Login;
