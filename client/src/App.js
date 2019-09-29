import React from 'react'
import UserSignup from './User/UserSignup'
import { Switch, Route } from 'react-router-dom'

import ProtectedRoutes from './ProtectedRoutes'

import UserProfile from './User/UserProfile'
import UserLogin from './User/UserLogin'
import Header from './Header'
import UserReservation from './User/UserReservation'
import ReservationConfirmation from './User/ReservationConfirmation'
import StaffReservation from './Staff/StaffReservations'
import Directions from './User/Directions'
import Home from './User/Home'
import ConfirmDelete from './User/ConfirmDelete'



import "./App.css"




const App = () => {
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path = '/' component = { Home }/>
                <Route path = '/confirmdelete' component = {ConfirmDelete } />
                <Route path = '/directions' component = {Directions} />
                <Route path = '/staffreservation' component = {StaffReservation} />
                <Route path = "/login" component = { UserLogin}  />
                <ProtectedRoutes path = "/userprofile" component = { UserProfile } />
                <Route path = '/signup' component = {UserSignup} />
                <Route path = '/newreservation' component = { UserReservation } />
                <Route path = '/confirm' component = { ReservationConfirmation } />
                
            </Switch>
            
            
        </div>
    )
}

export default App