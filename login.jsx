import React, { Component } from 'react'
import './App.css'

export default class login extends Component {
    state={
        name: '',
        pw: '',
    }
    render() {
        const onChange=(e)=>{
            this.setState({[e.target.name]: e.target.value})
        }
        return (
            <div className="login">
                <div>
                    <h1>Username: {this.state.name}</h1>
                    <h1>Password: {this.state.pw}</h1>
                </div>
                <input name='name' placeholder="username" type="text" onChange={(e)=>onChange(e)} />
                <input name='pw' placeholder="username" type="text" onChange={(e)=>onChange(e)} />
                <input  type="submit" value="submit"  />
            </div>
        )
    }
}
