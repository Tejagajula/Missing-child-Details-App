import React, { Component } from 'react';
import '../css/main.css';
import '../css/util.css';
import axios from 'axios';
import bgImage from '../images/bg-01.jpg';
import { Redirect } from 'react-router';



class SignUp extends Component {
    constructor(props){
        super(props);
        this.state={
            firstname:'',
            lastname:'',
            emailid:'',
            password:'',
            address:'',
            state:'',
            city:'',
            mobile:'',
            pincode:'',
            gender:'',
            redirect:'',
        }
    }

              
    datachange=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

   
    postData=(e)=>{
        const firstname = this.state.firstname
        const lastname = this.state.lastname
        const emailid = this.state.emailid
        const password = this.state.password
        const address = this.state.address
        const state = this.state.state
        const city = this.state.city
        const mobile = parseInt(this.state.mobile)
        const pincode = parseInt(this.state.pincode)
        const gender = this.state.gender

        const data = {
            firstname,
            lastname,
            emailid,
            password,
            address,
            state,
            city,
            mobile,
            pincode,
            gender,
        }
        console.log(data);
        
        axios.post('https://missingchild.herokuapp.com/signup', data)
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
    validateSignupInp=()=>{
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
            <div className="container-login100" style={{backgroundImage: `url(${bgImage})`}}>
                <div className="wrap-login100">
                    <form  className="login100-form validate-form" onSubmit={this.postData} >
                        <span className="login100-form-logo" >
                            <i className="zmdi zmdi-landscape"></i>
                        </span>

                        <span className="login100-form-title p-b-34 p-t-27">
                            Sign up
                        </span>

                        <div className="wrap-input100 validate-input" data-validate = "Enter firstname">
                            <input className="input100 loginemail" type="text" name="firstname" autocomplete="off" placeholder="firstname" value={this.state.firstname} onChange={this.datachange}/>
                        </div>

                        <div className="wrap-input100 validate-input" data-validate="lastname">
                            <input className="input100 loginpassword" type="text" name="lastname" autocomplete="off" placeholder="lastname" value={this.state.lastname} onChange={this.datachange}/>
                        </div>

                        <div className="wrap-input100 validate-input" data-validate="Enter email">
                            <input className="input100 loginpassword" type="email" name="emailid" autocomplete="off" placeholder="email id" value={this.state.emailid} onChange={this.datachange}/>
                        </div>

                        <div className="wrap-input100 validate-input" data-validate="Enter password">
                            <input className="input100 loginpassword" type="password" name="password" autocomplete="off" placeholder="pasword" value={this.state.password} onChange={this.datachange}/>
                        </div>

                        <div className="wrap-input100 validate-input" data-validate="Enter mobile">
                            <input className="input100 loginpassword" type="number" name="mobile" autocomplete="off" placeholder="mobile" value={this.state.mobile} onChange={this.datachange}/>
                        </div>

                        <div className="wrap-input100 validate-input" data-validate="Enter address">
                            <input className="input100 loginpassword" type="text" name="address" autocomplete="off" placeholder="address" value={this.state.address} onChange={this.datachange}/>
                        </div>

                        <div className="wrap-input100 validate-input" data-validate="Enter State">
                            <input className="input100 loginpassword" type="text" name="state" autocomplete="off" placeholder="state" value={this.state.state} onChange={this.datachange}/>
                        </div>

                        <div className="wrap-input100 validate-input" data-validate="Enter city">
                            <input className="input100 loginpassword" type="text" name="city" autocomplete="off" placeholder="city" value={this.state.city} onChange={this.datachange}/>
                        </div>

                        <div className="wrap-input100 validate-input" data-validate="Enter pincode">
                            <input className="input100 loginpassword" type="number" name="pincode" autocomplete="off" placeholder="pincode" value={this.state.pincode} onChange={this.datachange}/>
                        </div>

                         <div className="wrap-input100 validate-input" data-validate="Enter gender">
                            <input className="input100 loginpassword" type="text" name="gender" autocomplete="off" placeholder="gender" value={this.state.gender} onChange={this.datachange}/>
                        </div>

                        <div className="contact100-form-checkbox">
                            <input className="input-checkbox100" id="ckb1" autocomplete="off" type="checkbox" name="remember-me"/>
                            <label className="label-checkbox100" for="ckb1">    
                                Remember me
                            </label>
                        </div>

                        <div className="container-login100-form-btn">
                            <button type="submit" className="login100-form-btn" onClick={this.validateSignupInp}>
                                SignUp
                            </button>
                        </div>
                        <div className="text-center p-t-90">
                            <a className="txt1" href="#">
                                Forgot Password?
                            </a>
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

export default SignUp;
