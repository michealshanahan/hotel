import React, { Component } from "react"
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import { withUser } from "../UserProvider"

import "react-big-calendar/lib/css/react-big-calendar.css" 






class MyCalendar extends Component {



    localizer = momentLocalizer(moment)
    
    render(){
        
        return(
            <div className = "calendar" >
                <Calendar
                    localizer = { this.localizer }
                    events = {this.props.reservations }
                    startAccessor = "start"
                    endAccessor = "end"
                    views={{
                    month: true,
                    agenda: true
                    }}
                />
            </div>
        )
    }
}

export default withUser( MyCalendar )