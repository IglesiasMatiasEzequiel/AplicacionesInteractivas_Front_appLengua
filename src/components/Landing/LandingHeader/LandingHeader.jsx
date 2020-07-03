import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import './LandingHeader.scss'
import './../../../animate.css'
import { register, login } from "../../../services/authenticationServices";
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";

const override = css`
    width: 40px;
    height: 40px;
    display: inline-block;
    border-radius: 100%;
    border-width: 2px;
    border-style: solid;
    border-image: initial;
    border-color: rgb(54, 215, 183) rgb(54, 215, 183) transparent;
    animation: 0.75s linear 0s infinite normal both running animation-s8tf20;
    background: transparent !important;
`;

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            loading: false,
            isRegister: true,
            isLoading: false,
        }
    }

    handleChange = name => event => this.setState({ [name]: event.target.value })

    login = async (e) => {

        e.preventDefault();
        this.setState({ loading: true });

        const response = await login({
            username: this.state.username,
            password: this.state.password
        });

        if (response.status === 200) {

            console.log('loeguoe ok');

            this.setState({ loading: false });
            this.props.history.push({
                pathname: '/games',
                state: { username: this.state.username }
            });
        }
        else {
            this.setState({ loading: false });
        }
    };

    register = async (e) => {

        e.preventDefault();
        this.setState({ loading: true });

        const response = await register({
            username: this.state.username,
            password: this.state.password
        });

        if (response.status === 200) {
            this.setState({ loading: false });
            this.props.history.push({
                pathname: '/games',
                state: { username: this.state.username }
            });
        }
        else {
            this.setState({ loading: false });
        }
    }

    changeForm = () => {
        this.state.isRegister ? this.setState({ isRegister: false }) : this.setState({ isRegister: true })
    }

    render() {
        return (
            <div className="header" id="home">
                <div className="header-body">
                    <form onSubmit={this.state.isRegister ? this.login : this.register} autoComplete="off">
                        <div className="header-body--inputs ">
                            <h1 className="header-body--inputs-title">{this.state.isRegister ? "Empezá a jugar" : "Registrarse"}</h1>
                            <div className="header-body--inputs-divInput ">
                                <input type="text"
                                    className="header-body--inputs-divInput-input animated zoomIn"
                                    maxLength="10"
                                    placeholder="Tu nickname"
                                    name="username"
                                    onChange={this.handleChange('username')}
                                    required
                                />
                            </div>

                            <div className="header-body--inputs-divInput ">
                                <input type="password"
                                    className="header-body--inputs-divInput-input animated zoomIn"
                                    maxLength="10"
                                    placeholder="Tu contraseña"
                                    name="password"
                                    onChange={this.handleChange('password')}
                                    required
                                />
                                <div className="divViewSpan animated zoomIn">
                                    <span className="formViewSpan" onClick={this.changeForm}>{this.state.isRegister ? "No tengo cuenta" : "Ya tengo una cuenta"}</span>

                                </div>
                            </div>
                            <button type="submit" className="formSubmitButton animated zoomIn">

                                {!this.state.loading ? <span>{this.state.isRegister ? "JUGAR" : "REGISTRARSE" }</span>
                                    :
                                    <ClipLoader
                                        css={override}
                                        size={150}
                                        color={"#123abc"}
                                        loading={this.state.loading}
                                    />}
                            </button>

                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default withRouter(Header)