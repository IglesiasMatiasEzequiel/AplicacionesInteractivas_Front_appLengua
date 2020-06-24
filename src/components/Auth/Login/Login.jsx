import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button'
import './Login.scss'
import {css} from "@emotion/core";
import PacmanLoader from "react-spinners/PacmanLoader";
import { register, login, setSessionName } from "../../../services/authenticationServices"

const override = css`
  margin: 0 auto;
  text-align: center;
  width: 14%;
  margin-top: 140px;
`;

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            loading: false,
        };
    }

    handleChange = name => event => this.setState({[name]: event.target.value})

    login = async (e) => {
        e.preventDefault();
    
        const responseLogin = await login({
            username: this.state.username, 
            password: this.state.password
        });

        if (responseLogin.status === 200){
            setSessionName(this.state.username);
            this.setState({loading: false});
            this.props.history.push({pathname: '/games',});
        }
        else{
            this.setState({loading: false});
            this.cleanInput();
        }
    };

    render() {
        return (
            <div className="loginContainer">
                <div className="loginContainer-box">
                    <div className="loginContainer-box--header">
                        <h1>Ingrese sus datos</h1>
                    </div>
                    {!this.state.loading ?
                        <form onSubmit={this.login}>
                            <div className="loginContainer-box--form">
                                <form action="">
                                    <div className="loginContainer-box--form--email">
                                        <div>
                                            <label>E-mail:</label>
                                        </div>
                                        <div>
                                            <input
                                                type="email"
                                                id="emailInput"
                                                placeholder="tu@email.com"
                                                name="email"
                                                onChange={this.handleChange('email')}
                                                autoFocus
                                                required/>
                                        </div>
                                    </div>
                                    <div className="loginContainer-box--form--password">
                                        <div>
                                            <label>Contraseña:</label>
                                        </div>
                                        <div>
                                            <input
                                                type="password"
                                                id="passwordInput"
                                                placeholder="Contraseña"
                                                name="password"
                                                onChange={this.handleChange('password')}
                                                required/>
                                        </div>
                                    </div>
                                    <div className="loginContainer-box--form--button">
                                        <Button type="submit" variant="contained">Ingresar </Button>
                                    </div>
                                </form>
                            </div>
                        </form>
                        :
                        <PacmanLoader
                            css={override}
                            size={30}
                            color={"#45B39D"}
                            loading={this.state.loading}
                        />
                    }

                </div>

                <Button component={Link} to="/">Volver</Button>
                <Link to="/" className="link">
                    <button>Volver</button>
                </Link>

                <div>
            </div>
        </div>
        )
    }
}
