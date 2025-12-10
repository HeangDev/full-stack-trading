import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpSchema } from "../../schemas/signUpSchema";
import type { SignUpFormData } from "../../schemas/signUpSchema";
import { Link } from "react-router";
import { useTranslation } from 'react-i18next'

import TextField from "../../components/TextField";
import Button from '../../components/Button'
import Logo from "../../assets/img/logo.png"

const SignUp = () => {
    const { t } = useTranslation();
    const { register, handleSubmit, formState: { errors } } = useForm<SignUpFormData>({
        resolver: yupResolver(signUpSchema),
    });

    const handleSignUp = async (data: SignUpFormData) => {
        console.log(data)
    }

    return (
        <div className="auth__container">
            <div className="auth__heading">
                <div className="logo">
                    <img src={Logo} alt=""/>
                </div>
                <div className="auth__subtitle">
                    <h1>{t('signup.title')}</h1>
                    <p>{t('signup.subtitle')}</p>
                </div>
            </div>
            <div className="auth__form">
                <form onSubmit={handleSubmit(handleSignUp)} autoComplete="off">
                    <div className="auth__form__container">
                        <TextField type="text" fullWidth label={t('signup.username')}
                            error={!!errors.username}
                            helperText={errors.username?.message}
                            {...register("username")}
                        />
                        <TextField type="password" fullWidth label={t('signup.password')}
                            error={!!errors.password}
                            helperText={errors.password?.message}
                            {...register("password")}
                        />
                        <TextField type="password" fullWidth label={t('signup.confirmPassword')}
                            error={!!errors.password}
                            helperText={errors.password?.message}
                            {...register("password")}
                        />
                        <TextField type="password" fullWidth label="Referral Code"
                            error={!!errors.password}
                            helperText={errors.password?.message}
                            {...register("password")}
                        />
                    </div>
                    <div className="auth__button__container">
                        <Button type="submit" color="primary">{t('signup.buttonName')}</Button>
                        <div className="mt-6">
                            <p className="text-sm font-normal leading-6 text-center">{t('signup.footerText')} <Link to="/login" className="text-theme-primary hover:underline">{t('signup.footerLink')}</Link></p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp