import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpSchema } from "../../schemas/signUpSchema";
import type { SignUpFormData } from "../../schemas/signUpSchema";

import TextField from "../../components/TextField";
import TelephoneField from "../../components/TelephoneField";
import Button from '../../components/Button'

import Logo from "../../assets/img/logo.png"

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<SignUpFormData>({
        resolver: yupResolver(signUpSchema),
    });

    const handleSignUp = async (data: SignUpFormData) => {

    }

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
                <form onSubmit={handleSubmit(handleSignUp)} autoComplete="off">
                    <div className="auth__form__container">
                        <TextField type="text" fullWidth label="Username"
                            error={!!errors.username}
                            helperText={errors.username?.message}
                            {...register("username")}
                        />
                        <TextField type="password" fullWidth label="Password"
                            error={!!errors.password}
                            helperText={errors.password?.message}
                            {...register("password")}
                        />
                        <TextField type="password" fullWidth label="Confirm Password"
                            error={!!errors.password}
                            helperText={errors.password?.message}
                            {...register("password")}
                        />
                        <TextField type="password" fullWidth label="Referral Code"
                            error={!!errors.password}
                            helperText={errors.password?.message}
                            {...register("password")}
                        />
                        <div className="auth__container__button">
                            <Button type="submit" variant="primary">Sign Up</Button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp