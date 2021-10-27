import React from 'react'
import {Navbar } from 'react-bootstrap'
import * as constants from './Constants'

const Header = (props) => {
    const addListHandler = () => {
        props.addListHandler(true)
    }
    return (
        <Navbar className = "bg-dark-blue">
            <div className="brand-logo">
                <Navbar.Brand href="#home" className="brand">
                    <i className="fab fa-trello"></i>&nbsp; Trello
                </Navbar.Brand>
            </div>
            <div className="auth-btns">
                <button className = "common-btn add-list-btn board-btn" onClick = {addListHandler}>{constants.ADD_LIST}</button>
            </div>
      </Navbar>
    )
}

export default Header
