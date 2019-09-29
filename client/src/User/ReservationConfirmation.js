import React, {Component } from "react"
import { withUser } from "../UserProvider"


class ReservationConfirmation extends Component {
    constructor(){
        super()
        this.state = {
            editForm: false
        }
    }
    
    handleSubmit = () => {
        this.props.createReservation()
        this.props.history.push('/userprofile')
    }

    render(){
        
        let { title, start, end } = this.props.reservationCart
        return(
            <div>
                <button onClick = {()=> console.log(this.props.reservationCart)}>Console.log Reservation Confirmation</button>
                <div>Confirm Reservation</div>
                <div>Name: {title} Check in: {start} Checking out: {end}</div>

                <button onClick = { this.handleSubmit }>Confirm</button>
            </div>
        )
    }
}

export default withUser( ReservationConfirmation )