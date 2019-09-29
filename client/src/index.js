import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router} from 'react-router-dom'
import App from './App.js'
import ReservationProvider from './ReservationProvider'
import UserProvider from './UserProvider'


ReactDOM.render(

    <UserProvider>
        <ReservationProvider >
            <Router >
                <App />
            </Router>
        </ReservationProvider>
    </UserProvider>
    
    , document.getElementById('root'))