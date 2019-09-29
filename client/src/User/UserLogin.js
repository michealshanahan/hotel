import React, { Component } from "react"
import { withUser } from "../UserProvider"

class UserLogin extends Component{
    constructor(){
        super()
        this.state = {
            username: '',
            password: '',
            errorMessage: ''
        }
    }

    render(){

        const handleChange = (e) => {
            const { name, value } = e.target
            this.setState({ [name]: value })
        }

        const handleSubmit = (e) => {
            e.preventDefault()
            this.props.login( this.state )
                .then( res => this.props.history.push('/userprofile'))
                    .catch( err => {
                        console.log(err.response.data.message)
                        this.setState({ errorMessage: err.response.data.message })
                    })
        }

        return(
            <div>
                <form onSubmit = {handleSubmit} className = "signup">
                    Please login:

                    <input className ="input" name = "username" value = {this.state.username} placeholder = "User Name" type="text" onChange = {handleChange} />
                    <input className ="input" name = "password" type="text" value = {this.state.password} placeholder = "Password" onChange = {handleChange} />
                    <button>Enter</button>
                </form>
                {this.state.errorMessage && <div className = "error-message" >{this.state.errorMessage}</div> }
            </div>
        )
    }
}

export default withUser( UserLogin )