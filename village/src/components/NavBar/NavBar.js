import React from "react";
import { Nav, Title, Link } from "./NavBarSC";

const NavBar = props => {
    return (
        <Nav>
            <Title>Smurf Village</Title>
            <Link exact to="/" activeClassName="active">Smurfs</Link>
            <Link to="/smurf-form" activeClassName="active">New Smurf</Link>

        </Nav>
    );
}

export default NavBar;