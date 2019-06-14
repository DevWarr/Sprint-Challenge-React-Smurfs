import React, { Component } from "react"
import axios from "axios"
import { Route, withRouter } from "react-router-dom"

import "./App.css"
import SmurfForm from "./components/SmurfForm/SmurfForm"
import Smurfs from "./components/Smurfs/Smurfs"
import NavBar from "./components/NavBar/NavBar"

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            smurfs: []
        }
    }
    // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
    // Notice what your map function is looping over and returning inside of Smurfs.
    // You'll need to make sure you have the right properties on state and pass them down to props.

    componentDidMount() {
        axios
            .get("http://localhost:3333/smurfs")
            .then(res => this.setState({ smurfs: res.data }))
            .catch(err => console.error("Unable to request from API:", err))
    }

    addSmurf = newSmurf => {
        axios
            .post("http://localhost:3333/smurfs", newSmurf)
            .then(res => {
                this.setState({ smurfs: res.data });
                this.props.history.push("/");
            })
            .catch(err => console.error(err, err.response.data))
    }

    deleteSmurf = smurfId => {
        console.log(smurfId)
        axios
            .delete(`http://localhost:3333/smurfs/${smurfId}`)
            .then(res => this.setState({ smurfs: res.data }))
            .catch(err => console.error(err, err.response.data))
    }

    
    updateSmurf = smurfId => {
      this.props.history.push({
            pathname: `/smurf-form/${smurfId}`,
            checker: smurfId
        })
    }

    putSmurf = smurf => {
      axios
          .put(`http://localhost:3333/smurfs/${smurf.id}`, smurf)
          .then(res => {
            this.setState({ smurfs: res.data });
            this.props.history.push("/");
        })
        .catch(err => console.error(err, err.response.data))
    }

    render() {
        return (
            <div className="App">
                <NavBar />
                <Route
                    exact
                    path="/"
                    render={() => (
                        <Smurfs
                            smurfs={this.state.smurfs}
                            update={this.updateSmurf}
                            delete={this.deleteSmurf}
                        />
                    )}
                />
                <Route
                    path="/smurf-form"
                    render={() => <SmurfForm 
                                      addSmurf={this.addSmurf} 
                                      putSmurf={this.putSmurf}
                                      path={this.props.path}
                                  />
                    }
                />
            </div>
        )
    }
}

export default withRouter(App)
