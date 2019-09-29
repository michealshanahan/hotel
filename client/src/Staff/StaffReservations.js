import React, { Component } from 'react'
import { withUser } from '../UserProvider'
import StaffCalendar from './StaffCalendar'




class StaffReservation extends Component{
    constructor(){
        super()
        this.state = {
            title: '',
            start: '',
            end: '',
            resources: '' 
        }
    }

   

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleSubmit = (e => {
        e.preventDefault()
        console.log(this.state)
        this.props.addToCart(this.state)
        this.props.history.push('/confirm')
        
    })

    render(){
        return(
            <div>
                <form className = "signup input" onSubmit = {this.handleSubmit} >
                
                    Start Date: <input className = "signup input"  name = "start" value = {this.state.start} type="date" onChange = {this.handleChange} />
                    End Date: <input className = "signup input"  name = "end" value = {this.state.end} type="date" onChange = {this.handleChange} />
                    Name: <input className = "signup input"  name = "title" value = {this.state.title} type="text" onChange = {this.handleChange} />
                    <button>Submit</button>
                </form>
                <div className = "signup"  >Upcoming Reservations Calendar</div>
                <br/>
                <br/>
                <StaffCalendar />
            </div>
        )
    }
}

export default withUser(StaffReservation)