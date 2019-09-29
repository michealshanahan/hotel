import React, { Component } from 'react'
import { withUser } from '../UserProvider'

import MyCalendar from './Calendar'

class StaffCalendar extends Component {


    componentDidMount(){
        this.props.staffGetReservations()
    }
   

    render(){
        return (
            <div className = "calendar" >
                <MyCalendar />
            </div>
        )

    }
}

export default withUser(StaffCalendar)