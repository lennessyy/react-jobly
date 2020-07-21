import React, { useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import './Navbar.css'
import { Navbar, Nav, NavItem } from "reactstrap";
import TokenContext from './TokenContext'

function NavBar() {
    const { token, setToken } = useContext(TokenContext)
    const history = useHistory()
    const logout = (e) => {
        e.preventDefault()
        localStorage.removeItem('token')
        setToken(null)
        history.push('/')
    }
    if (token) {
        return (
            <div>
                <Navbar expand="md">
                    <NavLink exact to="/" className="navbar-brand">
                        Jobly
                    </NavLink>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink to="/companies">Companies</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/jobs">Jobs</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/profile">Profile</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink id="logout" onClick={logout} to="#">Log out</NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
        );
    } else {
        console.log('There is no token')
        return (
            <div>
                <Navbar expand="md">
                    <NavLink exact to="/" className="navbar-brand">
                        Jobly
                    </NavLink>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink to="/">Sign Up</NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}

export default NavBar;
