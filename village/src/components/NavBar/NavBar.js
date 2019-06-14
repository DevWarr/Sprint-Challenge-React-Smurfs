import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = props => {
    return (
        <nav>
            <h3>Smurf Village</h3>
            <NavLink to="/" activeClassName="active">Smurfs</NavLink>
            <NavLink to="/new-smurf" activeClassName="active">New Smurf</NavLink>

        </nav>
    );
}

export default NavBar;