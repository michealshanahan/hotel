import React, { Component } from 'react'
import axios from "axios"
const reservationAxios = axios.create()


const { Consumer, Provider } = React.createContext()

reservationAxios.interceptors.request.use((config) => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})

class UserProvider extends Component{
    constructor(){
        super()
        this.state = {
            user: JSON.parse(localStorage.getItem( "user" )) || {},
            token: localStorage.getItem( "token" ) || "",
            isAdmin: JSON.parse(localStorage.getItem( "isAdmin")) || false,
            reservations: [],
            reservationCart: {}
        }
    }

    toggleEdit = (index) => {
        this.setState(prev => {
            prev.reservations[index].editReservation = !prev.reservations[index].editReservation
        })
    }


    getReservations = () => {
        return reservationAxios.get('/api/reservations')
            .then(res => {
                this.setState({ reservations: res.data })
                return res
            })
    }
    staffGetReservations = () => {
        return reservationAxios.get('/api/reservations/staff')
            .then(res => {
                this.setState({ reservations: res.data})
                return res
            })
    }
    
    clearState = () => {
        this.setState({
            user: {},
            token: "",
            reservations: [],
            isAdmin: false,
            reservationCart: {}
        })
    }

    setStorage = ( user, token, isAdmin ) => {
        localStorage.setItem( "user", JSON.stringify( user ) )
        localStorage.setItem( "token", token )
        localStorage.setItem( "isAdmin", JSON.stringify( isAdmin ))
    }

    signup = (userInfo) => {
        return axios.post("/users/signup", userInfo).then(res => {
            const { user, token } = res.data
            this.setState({ user, token, isAdmin: user.isAdmin })
            this.setStorage(user, token, user.isAdmin)
            return res
        })
    }
    
    login = (credentials ) => {
        return axios.post( "/users/login", credentials ).then( res => {
            const { user, token } = res.data 
            this.setState({ user, token })
            this.setStorage(user, token, user.isAdmin)
            return res
        })
    }
    
    logout = () => {
        localStorage.removeItem( "user")
        localStorage.removeItem( "token")
        localStorage.removeItem("isAdmin")
        this.clearState()
        
    }
    
    deleteAccount = ( id ) => {
        return axios.delete(`/users/${id}`).then(res => {
            this.logout()

        })
    }
    updateProfile = ( user_id, updatedUser ) => {
        return axios.put(`/users/${user_id}`, updatedUser )
            .then( res => {
                const { user, token } = res.data 
                this.setState( { user, token })
                this.setStorage(user, token, user.isAdmin)
            })
    }

    deleteReservation = (_id) => {
        return reservationAxios.delete(`/api/reservations/${_id}`).then(res => {
            this.setState(prev => {
                const updatedReservations = prev.reservations.filter(reservation => {
                    return reservation._id !== _id
                })
                return { reservations: updatedReservations }
            })
            return res.data
        })
    }

    addToCart = (reservation) => {
        this.setState({ reservationCart: reservation })
    }

    createReservation = () => {
        return reservationAxios.post( '/api/reservations', this.state.reservationCart )
            .then( res => {
                this.setState( prev => {
                    return {
                        reservations: [...prev.reservations, res.data],
                        reservationCart: {}
                    }
                })
            return res 
        })
    } 

    updateReservation = (_id, updatedReservation, index) => {
        updatedReservation.editReservation = false
        return reservationAxios.put(`/api/reservations/${_id}`, updatedReservation)
            .then( res => {
                this.getReservations()
            return res
        })
    }



    render(){
        return(
            <Provider value = {{
                updateProfile: this.updateProfile,
                updateReservation: this.updateReservation,
                deleteReservation: this.deleteReservation,
                toggleEdit: this.toggleEdit,
                staffGetReservations: this.staffGetReservations,
                getReservations: this.getReservations,
                signup: this.signup,
                login: this.login,
                logout: this.logout,
                deleteAccount: this.deleteAccount,
                createReservation: this.createReservation,
                addToCart: this.addToCart,
                ...this.state
            }} >
                {this.props.children}
            </Provider>
        )
    }
}

export default UserProvider
export const withUser = (Comp) => {
    return props => 
    <Consumer>
        {value => <Comp {...value } {...props} />}
    </Consumer>
}