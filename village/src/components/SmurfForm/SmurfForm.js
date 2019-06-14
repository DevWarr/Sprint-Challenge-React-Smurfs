import React, { Component } from "react"
import { FormContainer, Form, Input, Button } from "./SmurfFormSC";

class SmurfForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            age: "",
            height: ""
        }
    }

    addSmurf = event => {
        event.preventDefault()
        // add code to create the smurf using the api
        const newSmurf = {
            name: this.state.name,
            age: Number(this.state.age),
            height: `${this.state.height}cm`
        }

        this.props.addSmurf(newSmurf)

        this.setState({
            name: "",
            age: "",
            height: ""
        })
    }

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        return (
            <FormContainer>
                <Form onSubmit={this.addSmurf}>
                    <h2>{this.props.msg}</h2>
                    <Input
                        type="text"
                        onChange={this.handleInputChange}
                        placeholder="name"
                        value={this.state.name}
                        name="name"
                        required
                    />
                    <Input
                        type="number"
                        onChange={this.handleInputChange}
                        placeholder="age"
                        value={this.state.age}
                        name="age"
                        required
                    />
                    <Input
                        type="number"
                        onChange={this.handleInputChange}
                        placeholder="height"
                        value={this.state.height}
                        name="height"
                        required
                    />
                    <Button type="submit">Add to the village</Button>
                </Form>
            </FormContainer>
        )
    }
}

SmurfForm.defaultProps = {
    msg: "Add a new Smurf!"
}

export default SmurfForm
