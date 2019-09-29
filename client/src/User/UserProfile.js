import React, { Component } from 'react'
import { withUser } from '../UserProvider'
import Calendar from '../Staff/Calendar'
import EditReservation from "./EditReservation"

class UserProfile extends Component{
    constructor(){
        super()
        this.state={
            editProfile: false
        }
    }

    componentDidMount(){
        this.props.getReservations()
    }
    editReservation = (reservation, index) =>{
        console.log(reservation.user)
        this.props.deleteReservation(reservation._id)

      

    }

    mappedReservation = () => {
        return this.props.reservations.map( (reservation, index) => {
            let { _id, title , start, end, editReservation } = reservation
            let startYear = start.slice(0, 4) 
            let startMonth = start.slice(5, 8) 
            let startDay = start.slice(8, 10) 
            let endYear = end.slice(0, 4) 
            let endMonth = end.slice(5, 8) 
            let endDay = end.slice(8, 10)
            
            return(
                    <div key = { _id } className = "signup" >
                        Reservation for { title } from {startMonth}{startDay}-{startYear} to {endMonth}{endDay}-{endYear} 
                        <button onClick = {()=> this.editReservation(reservation, index)} >Delete</button>
                    </div>
            )
        })
    }
    

    render(){
        return(
            <div>

                <div>Welcome {this.props.user.firstName}</div>
                <button onClick = {()=> this.props.history.push('/newreservation') }>New Reservation</button>
                <button onClick = {() => this.props.history.push('/signup')}>Edit Profile</button>
                {this.mappedReservation()}
                <Calendar />

            </div>
        )
    }
}

export default withUser( UserProfile )