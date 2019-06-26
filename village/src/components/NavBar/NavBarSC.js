import styled from "styled-components"
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
    display:             flex;
    padding:             0 20px;
    margin-bottom:       20px;
    align-items:         center;
`

export const Title = styled.h1`
    font-size:           1.17em;
    flex-grow:           1;
    text-align:          left;
`

export const Link = styled(NavLink)`
    text-decoration:     none;
    color:               black;
    margin:              0 10px;
    padding:             5px;

    &:hover {text-decoration: underline}
    &.active {background: #DDDDDD}
`