import React, { Component } from 'react'
import { withUser } from "../UserProvider"

class EditReservation extends Component{
    constructor(){
        super()
        this.state = {
            title: '',
            start: "",
            end: "",
            _id: ''

        }
    }

    componentDidMount(){
        const { title, start, end, _id } = this.props.props
        this.setState({title, start, end, _id})
    }


    handleChange = (e) => {
        let { name, value } = e.target
        this.setState({ [name]: value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        
    }

    render(){
        return(
            <div>
                <form onSubmit = {this.handleSubmit} >
                    <input type="text" name = "title" placeholder = "Name" value = {this.state.title} onChange = {this.handleChange }/>
                    <input type="date" name = "start" placeholder = "Start Date" value = {this.state.start} onChange = {this.handleChange }/>
                    <input type="date" name = "end" placeholder = "End Date" value = {this.state.end} onChange = {this.handleChange }/>
                    <button>Edit Reservation</button>

                </form>
            </div>
        )
    }

}


export default withUser(EditReservation)