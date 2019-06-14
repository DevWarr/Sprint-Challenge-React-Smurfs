import React from "react";
import { NavLink } from "react-router-dom";
import { Nav, Title, Link } from "./NavBarSC";

const NavBar = props => {
    return (
        <Nav>
            <h3>Smurf Village</h3>
            <NavLink to="/" activeClassName="active">Smurfs</NavLink>
            <NavLink to="/smurf-form" activeClassName="active">New Smurf</NavLink>

        </Nav>
    );
}

export default NavBar;