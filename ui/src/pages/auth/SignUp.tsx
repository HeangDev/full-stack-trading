import React from 'react'
import { TextField, FormControl, Label } from '../../components/TextField'
import Button from '../../components/Button'

import Logo from "../../assets/img/logo.png"

const SignUp = () => {
    return (
        <div className="auth__container">
            <div className="auth__heading">
                <div className="logo">
                    <img src={Logo} alt=""/>
                </div>
                <div className="auth__subtitle">
                    <h1>Getting Started</h1>
                    <p>Create an account to continue!</p>
                </div>
            </div>
            <div className="auth__form">
                <form autoComplete="off">
                    <div className="auth__form__container">
                        <FormControl>
                            <TextField type="text" placeholder=""/>
                            <Label labelName="Username"/>
                        </FormControl>
                        <FormControl>
                            <TextField type="text" placeholder=""/>
                            <Label labelName="Phone Number"/>
                        </FormControl>
                        <FormControl>
                            <TextField type="password" placeholder=""/>
                            <Label labelName="Password"/>
                        </FormControl>
                        <div className="auth__container__button">
                            <Button type="submit" variant="primary">Login</Button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp