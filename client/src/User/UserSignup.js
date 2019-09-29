import React, { Component } from 'react'
import { withUser } from "../UserProvider"


class UserSignup extends Component {
    constructor(){
        super()
        this.state = {
            user: {},
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
            username: '',
            currentPassword: '',
            password: '',
            confirmPassword: "",
            errorMessage: '',
            isAdmin: false

        }
    }

    componentDidMount(){
        const { firstName, lastName, phone, email, username, isAdmin } = this.props.user
        this.setState({ user: this.props.user, firstName, lastName, phone, email, username, isAdmin })
    }



    handleChange = (e) => {
        let {name, value} = e.target
        name === "isAdmin" ? this.setState(prev => {
            return {isAdmin: !prev.isAdmin}
        })
        :
        this.setState({ [name] :  value  })
        
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if(!this.props.token){
            this.state.password === this.state.confirmPassword ? 
                this.props.signup(this.state)
                    .then(() => this.props.history.push("/userprofile"))
                    .catch( err => {
                        console.log(err.response.data.message)
                        this.setState({ errorMessage: err.response.data.message })
                    })
            : this.setState({errorMessage: "Passwords Must Match"})
        }else {
            
            this.state.password === this.state.confirmPassword ? 
                this.props.updateProfile(this.props.user._id, this.state)
                    .then(() => this.props.history.push("/userprofile"))
                    .catch( err => {
                        console.log(err.response.data.message)
                        this.setState({ errorMessage: err.response.data.message })
                    })
            : this.setState({errorMessage: "Passwords Must Match"})
        }
    } 

    render(){

        return(
            <div>
                
                <form className = "sign-up" onSubmit = { this.handleSubmit }>
                    For the purpose of this demo I have added the ability to sign up as an administrator. Administrators are able to view, create and delete reservations for others, and access the Reservation Calendar.<br></br>
                    
                    {
                        !this.props.token ? 
                            <React.Fragment>
                                <h3 className = "signup" >Welcome to Oak Springs</h3>
                                <h4 className = "signup" >Sign up</h4>
                            </React.Fragment>
                        :
                            <React.Fragment>
                                <h3 className = "signup" >Edit Profile</h3>
                            </React.Fragment>
                    }
                    <div className = "form-wrapper" >
                        First Name 
                        <br/>
                        <input className = "form-input" name = "firstName" value = { this.state.firstName } onChange = {this.handleChange} />
                        <br/>
                        Last Name 
                        <br/>
                        <input className = "form-input" name = "lastName"   value = {this.state.lastName} onChange = {this.handleChange} />
                        <br/>
                        Phone Number 
                        <br/>
                        <input className = "form-input" name = "phone" value = {this.state.phone} onChange = {this.handleChange} />
                        <br/>
                        

                        {
                            !this.props.token ?
                                
                                <React.Fragment>
                                    Username
                                    <br/>
                                    <input className = "form-input" name = "username"   value = {this.state.username} onChange = {this.handleChange} />
                                    <br/>
                                    Password 
                                    <br/>
                                    <input className = "form-input" name = "password"   value = {this.state.password} onChange = {this.handleChange} />
                                    <br/>
                                    Confirm Password 
                                    <br/>
                                    <input className = "form-input" name = "confirmPassword"   value = {this.state.confirmPassword} onChange = {this.handleChange} />
                                    <br/>
                                    Administrator:
                                    <input className = "form-input" type = "checkbox" checked = {this.state.isAdmin} name = "isAdmin" value ={this.state.isAdmin} onChange = {this.handleChange} ></input>
                                    
                                    <button>Join</button>

                                </React.Fragment>
                            :
                                <React.Fragment>
                                    
                                    <br/>
                                    
                                    Administrator:
                                    <input className = "form-input" type = "checkbox" checked = {this.state.isAdmin} name = "isAdmin" value ={this.state.isAdmin} onChange = {this.handleChange} ></input>
                                    
                                    <button>Update</button>
                        

                                </React.Fragment>
                        }
                    </div>
                </form>
                <button onClick = {()=> console.log(this.props.user._id)} >propss</button>
                
                {this.props.token && <button onClick = {()=> this.props.history.push('/confirmdelete')} >Delete Account</button>}
            
                {this.state.errorMessage && <div className = "error-message" >{this.state.errorMessage}</div>}
            </div>
        )
    }
}

export default withUser(UserSignup)