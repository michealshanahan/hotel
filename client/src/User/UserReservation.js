import React, { Component } from 'react'
import { withUser } from "../UserProvider"

class UserReservation extends Component{
    constructor(){
        super()
        this.state = {
            user: JSON.parse(localStorage.getItem( "user" )) || {},
            title: "",
            start: '',
            end: ""
        }
    }


    handleChange = (e) => {
        let { name, value } = e.target
        this.setState({ [name]: value})
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addToCart( this.state )
        this.props.token ?
            this.props.history.push('/confirm')
        :
            this.props.history.push('/signup')
        
    }

    render(){

        return(
            <div >
                <form className = "form-wrapper" onSubmit = {this.handleSubmit} >
                    Name:<br/>
                    <input className = "form-input" type="text" name = "title" placeholder = "Name" value = {this.state.title} onChange = {this.handleChange }/>
                    <br/>
                    Start Date:
                    <br/>
                    <input className = "form-input" type="date" name = "start" placeholder = "Start Date" value = {this.state.start} onChange = {this.handleChange }/>
                    <br/>
                    End Date:
                    <br/>
                    <input className = "form-input" type="date" name = "end" placeholder = "End Date" value = {this.state.end} onChange = {this.handleChange }/>
                    <br/>
                    <button>Create Reservation</button>

                </form>
              
            </div>
        )
    }

}

export default withUser( UserReservation )

