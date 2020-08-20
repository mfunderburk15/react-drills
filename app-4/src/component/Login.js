import React, { Component } from "react"

export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        };
        this.handleLogin = this.handleLogin.bind(this)
    }
    handleUserChange(user) {
        this.setState({
            username: user
        });
    }

    handlePasswordChange(pass) {
        this.setState({
            password: pass
        });
    }

    handleLogin() {
        alert(`Username: ${this.state.username}  Password: ${this.state.password}`)
    }
    render() {
        return (
            <div>
                <input className="username" type="text" onChange={e => this.handleUserChange(e.target.value)} />
                <input className="password" type="text" onChange={e => this.handlePasswordChange(e.target.value)} />
                <button className="Login" onClick={this.handleLogin}>Login</button>
            </div>
        )
    }
}