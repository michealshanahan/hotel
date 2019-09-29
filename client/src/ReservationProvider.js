import React, { Component } from 'react'
const { Consumer, Provider } = React.createContext()


class ReservationProvider extends Component {
    constructor(){
        super()
        this.state = {

        }
    }
    render(){
        return(
            <Provider value = {{...this.state}}>
                {this.props.children}
            </Provider>
        )
    }
}


export default ReservationProvider
export const withReservations = (Comp) => {
    return( props ) => 
    <Consumer>
        {value => <Comp {...value}{...props} />}
    </Consumer>
}