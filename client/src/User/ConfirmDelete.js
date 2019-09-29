import React, { Component } from "react"
import { withUser } from "../UserProvider"

class ConfirmDelete extends Component {
    constructor(){
        super()
        this.state={
            deleted: false
        }
    }
    
    handleSubmit = () => {
        this.props.deleteAccount(this.props.user._id)
        this.setState({ deleted: true })
    }

    

    render(){
        return(
            <div>
                <div className ="signup" >
                    { 
                        this.state.deleted ?
                            "Account Has Been Deleted"
                        :
                            <React.Fragment>
                                All reservations made with this account will still be active. To cancel reservations please delete them from the reservations page.
                                <div>Confirm Delete?</div>
                                <button onClick = { this.handleSubmit } >Delete Profile</button>
                            </React.Fragment>

                    }
                </div>
            </div>
        )
    }
}

export default withUser( ConfirmDelete )