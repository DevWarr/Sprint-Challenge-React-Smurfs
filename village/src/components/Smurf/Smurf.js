import React from "react"
import { SmurfCard, Name, Age, Height } from "./SmurfSC"

const Smurf = props => {
    return (
        <SmurfCard>
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
