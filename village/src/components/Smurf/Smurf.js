import React from "react"
import { SmurfCard, CardButton, Name, Age, Height } from "./SmurfSC"

const Smurf = props => {
    return (
        <SmurfCard>
            <CardButton onClick={() => props.update(props.id)}>Update</CardButton>
            <CardButton onClick={() => props.delete(props.id)}>Remove</CardButton>
            <Name>{props.name}</Name>
            <Height>{props.height} tall</Height>
            <Age>{props.age} smurf years old</Age>
        </SmurfCard>
    )
}

Smurf.defaultProps = {
    name: "",
    height: "",
    age: ""
}

export default Smurf
