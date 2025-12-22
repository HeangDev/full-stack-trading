import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../schemas/loginSchema";
import type { LoginFormData } from "../../schemas/loginSchema";
import { Link, useNavigate } from "react-router";
import { useTranslation } from 'react-i18next'

import TextField from "../../components/TextField";
import Button from '../../components/Button'
import Logo from "../../assets/img/logo.png"

const Login = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>({
        resolver: yupResolver(loginSchema(t)),
    });

    const handleLogin = async (data: LoginFormData) => {
        console.log(data)
    }

    return (
        <div className="auth__container">
            <div className="auth__heading">
                <div className="logo">
                    <img src={Logo} alt=""/>
                </div>
                <div className="auth__subtitle">
                    <h1>{t('login.title')}</h1>
                    <p>{t('login.subtitle')}</p>
                </div>
            </div>
            <div className="auth__form">
                <form  onSubmit={handleSubmit(handleLogin)} autoComplete="off">
                    <div className="auth__form__container">
                        <TextField type="text" label={t('login.username')}
                            error={!!errors.username}
                            helperText={errors.username?.message}
                            {...register("username")}
                        />
                        <TextField type="password" label={t('login.password')}
                            error={!!errors.password}
                            helperText={errors.password?.message}
                            {...register("password")}
                        />
                    </div>
                    <div className="auth__button__container">
                        <Button onClick={() => navigate("/home")} type="submit" color="primary">{t('login.buttonName')}</Button>
                    </div>
                    <div className="auth__footer">
                        <p>{t('login.footerText')} <Link to="/sign_up">{t('login.footerLink')}</Link></p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login