import React, { Component } from "react";
import { Textfield, Button } from "react-mdl";
import "./css/Contact.css";


class Contact extends Component {
    constructor(props) {
        super(props)
        this.state = { name: "", email: "", message: "" }
        this.updateName = this.updateName.bind(this)
        this.updateEmail = this.updateEmail.bind(this)
        this.updateEmail = this.updateEmail.bind(this)
        this.showInfo = this.showInfo.bind(this)
    }

    updateName(event) {
        this.setState({
            name: event.target.value
        })
    }
    updateEmail(event) {
        this.setState({
            email: event.target.value
        })
    }
    updateMessage(event) {
        this.setState({
            message: event.target.value
        })
    }

    showInfo() {
        const name = this.state.name
        const email = this.state.email
        if (name !== "" && email !== "")
            alert(this.state.email)
    }

    render() {
        return (
            <div className="contact-content">
                <div className="profileCard">
                    <Textfield
                        onChange={(event) => { this.updateName(event) }}
                        label="Name"
                        style={{ width: '200px' }}
                    />
                    <br />
                    {/* Numeric textfield */}
                    <Textfield
                        onChange={(event) => { this.updateEmail(event) }}
                        pattern="^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$"
                        error="Enter Valid Email"
                        label="mail@example.com"
                        style={{ width: '200px' }}
                    />
                    <br />
                    <Textfield
                        onChange={(event) => { this.updateMessage(event) }}
                        label="Message"
                        rows={3}
                        style={{ width: '200px' }}
                    />
                    <br />
                    <Button onClick={this.showInfo} className="send-button" raised ripple>Send!</Button>
                </div>
                <div style={{ padding: "170px" }}></div>
            </div>
        )
    }
}


export default Contact