import styled from "styled-components";

export const FormContainer = styled.div`
    position: fixed;
    top:                 40%;
    left:                50%;
    transform:           translate(-50%, -50%);
    -ms-transform:       translate(-50%, -50%);
    background:          #dddddd;
    max-width:           600px;
    width:               100%;
    height:              450px;
`

export const Form = styled.form`
    position:            absolute;
    top:                 50%;
    transform:           translateY(-50%);
    -ms-transform:       translateY(-50%);
    max-width:           600px;
    width:               100%;
    height:              80%;
    box-sizing:          border-box;
    margin:              auto;
    padding:             0 40px;
    display:             flex;
    flex-wrap:           wrap;
    justify-content:     space-around;
`

export const Input = styled.input`
    height:              2rem;
    width:               100%;
    margin:              10px 0;
`

export const Button = styled.button`
    cursor:              pointer;
    box-sizing:          border-box;
    width:               40%;
    margin:              10px 0;
    background:          white;
    text-decoration:     none;
    font-size:           1rem;
    padding:             8px;

    &:hover {
        text-decoration: underline;
    }
`