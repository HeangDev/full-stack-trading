import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../schemas/loginSchema";
import type { LoginFormData } from "../../schemas/loginSchema";

import TextField from "../../components/TextField";
import Button from '../../components/Button'

import Logo from "../../assets/img/logo.png"

type LoginQueryData = {
    login?: {
        token: string;
        tokenExpiration: number;
        userId: string;
    } | null;
};
type LoginQueryVars = {
    username: string;
    password: string;
};

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>({
        resolver: yupResolver(loginSchema),
    });

    const handleLogin = async (data: LoginFormData) => {

    }

    return (
        <div className="auth__container">
            <div className="auth__heading">
                <div className="logo">
                    <img src={Logo} alt=""/>
                </div>
                <div className="auth__subtitle">
                    <h1>Let’s Sign You In</h1>
                    <p>Welcome back, you’ve been missed!</p>
                </div>
            </div>
            <div className="auth__form">
                <form onSubmit={handleSubmit(handleLogin)} autoComplete="off">
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
                        <div className="auth__container__button">
                            <Button type="submit" variant="primary">Login</Button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login