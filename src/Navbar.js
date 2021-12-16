import React, { Component } from 'react'

export default class Navbar extends Component {

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/" >Logout</a>
                    <a className="navbar-brand" href="/Home">Home</a>
                    <a className="navbar-brand" href="/Cart">Cart</a>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
