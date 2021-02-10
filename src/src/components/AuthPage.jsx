import React, { Component } from 'react';

export default class AuthPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLogin: true,
            isSignUp: false,
        }
    }
    render() {
        return (
            <div className="auth-bg">
                {this.state.isLogin ?
                    <Login /> : null
                }
            </div>
        )
    }
}

class Login extends Component {
    render() {
        return (
            <div class="box">
                <div class="field">
                    <label class="label">Email</label>
                    <div class="control">
                        <input class="input" type="email" placeholder="e.g. alex@example.com" />
                    </div>
                </div>

                <div class="field">
                    <label class="label">Password</label>
                    <div class="control">
                        <input class="input" type="password" placeholder="********" />
                    </div>
                </div>

                <button class="button is-primary">Sign in</button>
            </div>
        )
    }
}