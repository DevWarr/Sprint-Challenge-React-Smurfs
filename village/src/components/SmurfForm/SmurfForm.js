import React, { Component } from "react"
import axios from "axios"
import { withRouter } from "react-router-dom"
import { FormContainer, Form, Input, Button } from "./SmurfFormSC"

class SmurfForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: "",
            name: "",
            age: "",
            height: "",
            msgTitle: "Add a new Smurf!",
            msgButton: "Add to the Village",
            func: this.addSmurf
        }
    }

    componentWillMount() {
        // change this line to grab the id passed on the URL
        console.log(this.props)
        if (this.props.history.location.checker >= 0) {
            const id = this.props.history.location.checker
            this.fetchSmurf(id)
        } else {
            return
        }
    }

    fetchSmurf = id => {
        axios
            .get(`http://localhost:3333/smurfs`)
            .then(response => {
                const editData = response.data.filter(smurf => (smurf.id === id))

                if (!editData[0]) {
                    console.log("No smurf found with this data!")
                    return
                }
                console.log(editData[0])
                this.setState({
                    id: editData[0].id,
                    name: editData[0].name,
                    age: editData[0].age,
                    height: editData[0].height.substring(0, editData[0].height.length-2),
                    msgTitle: "Edit Smurf info:",
                    msgButton: "Confirm Changes",
                    func: this.updateSmurf
                })
            })
            .catch(error => {
                console.error(error)
            })
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

    updateSmurf = e => {
        e.preventDefault()
        const smurf = {
            id: this.state.id,
            name: this.state.name,
            age: Number(this.state.age),
            height: `${this.state.height}cm`
        }

        this.props.putSmurf(smurf)

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
                <Form onSubmit={this.state.func}>
                    <h2>{this.state.msgTitle}</h2>
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
                    <Button type="submit">{this.state.msgButton}</Button>
                </Form>
            </FormContainer>
        )
    }
}

export default withRouter(SmurfForm)
