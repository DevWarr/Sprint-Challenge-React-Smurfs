import React, { Component } from "react"
import axios from "axios"
import { withRouter } from "react-router-dom"
import { FormContainer, Form, Input, Button } from "./SmurfFormSC"

class SmurfForm extends Component {
    constructor(props) {
        super(props)
        this.state = {

            /*Name, age, and height are the typical requirements for this form.
              These other properties exist solely because the form handles BOTH
              Adding a new smurf and updating info on currently listed smurfs.

              id keeps track of our smruf id for update changes,
              msgTitle, msgButton, and func are either:
              - Adding a new smurf, or
              - Editing, confirming, and updating changes
            */
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

        // When the form first loads, it checks to see if it has a "checker" value.
        // This just checks to see if we're updating (checker exists)
        // or adding a new smurf (checker does not exist)
        console.log(this.props)
        if (this.props.history.location.checker >= 0) {
            const id = this.props.history.location.checker
            this.fetchSmurf(id) // Check exists? set it to id and then fetch!
        } else {
            return
        }
    }

    /*Here we do an extra axios.get() call and filter our results to only retrive 
      info on the Smurf we wish to edit.
      Once we get our Smurf info, display it on the form to prep for edits.
    */
    fetchSmurf = id => {
        axios
            .get(`http://localhost:3333/smurfs`)
            .then(response => {
                const editData = response.data.filter(smurf => (smurf.id === id)) 
                // - editData now should be an array with one obj

                if (!editData[0]) {
                    console.log("No smurf found with this data!")
                    return
                }
                console.log(editData[0])

                // setState with out Smurf info to be edited, and change our messages and functions for the form
                this.setState({
                    id: editData[0].id,
                    name: editData[0].name,
                    age: editData[0].age,
                    height: editData[0].height.substring(0, editData[0].height.length-2), // Cut "cm" out of the string for the form
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

        // Create Smurf Obj
        const newSmurf = {
            name: this.state.name,
            age: Number(this.state.age), // Number to match existing data type
            height: `${this.state.height}cm` // Add "cm" at the end of the string
        }

        // Send off to parent function in order to axios.post
        this.props.addSmurf(newSmurf)

        // Reset state
        this.setState({
            name: "",
            age: "",
            height: ""
        })
    }

    updateSmurf = e => {
        e.preventDefault()

        // Create 
        const smurf = {
            id: this.state.id,
            name: this.state.name,
            age: Number(this.state.age), // Number to match existing data type
            height: `${this.state.height}cm` // Add "cm" at the end of the string
        }

        // Send off to parent function in order to axios.put
        this.props.putSmurf(smurf)

        // Reset state
        this.setState({
            id: "",
            name: "",
            age: "",
            height: "",
            msgTitle: "Add a new Smurf!",
            msgButton: "Add to the Village",
            func: this.addSmurf
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
