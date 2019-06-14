import styled from "styled-components"

export const CardButton = styled.span`
    cursor:              pointer;
    font-size:           1.17em;
    font-weight:         bold;
    display:             none;
    margin-top:          -10px;
    position:            absolute;
    top:                 25;

    &:last-of-type{
        right:           0;
        margin-right:    10px;
    }
    &:first-of-type{
        left:            0;
        margin-left:     10px;
    }
    &:hover {
        text-decoration: underline;
    }
` 

export const SmurfCard = styled.div`
    position:            relative;
    background:          #dddddd;
    width:               500px;
    margin:              15px auto;
    padding:             17px;
    box-shadow:          4px 4px 2px gray;
    display:             flex;
    flex-direction:      column;
    justify-content:     space-between;

    &:hover {
        ${CardButton} {display: block;}
    }
`


export const Name = styled.h3`
    text-align:          center;
`

export const Height = styled.strong`
    text-align:          left;
    margin:              0 0 10px 20px;
`

export const Age = styled.p`
    text-align:          left;
    margin:              0 0 10px 20px;
`