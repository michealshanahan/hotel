import React from "react"
import NavBar from "./NavBar"
import oaktree from './assets/oak-tree.png'
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className = "header-wrapper">
            <div className = "header-container" >
                <div className = "title-card" >
                    <img className = "logo" src= {oaktree} alt='Oak Tree With Transparent Background clip art'/>
                    <div className = "title" >Oak Springs Hotel</div>
                    <div className = "sub-title" >
                        <Link className = "sub-text" to = '/directions' >5200 West 150 South, Salt Lake City, Utah 84101</Link>
                        <br></br>
                        <a className = "sub-text" href="tel:+8018554001">Phone: (801)855-4001</a>


                    </div>

                </div>
                <div className = "user-card">

                </div>
            </div>

                <div className = "navbar-container" >
                    <NavBar />

                </div>
        </div>
    )
}

export default Header