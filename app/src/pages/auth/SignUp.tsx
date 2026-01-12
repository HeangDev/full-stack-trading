import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpSchema } from "../../schemas/signUpSchema";
import type { SignUpFormData } from "../../schemas/signUpSchema";
import { Link } from "react-router";
import { useTranslation } from 'react-i18next'

import { FormControl, InputLabel, TextField } from '../../components/TextField';
import { Select, Option } from '../../components/Select';
import Button from '../../components/Button'
import Logo from "../../assets/img/logo.png"
import { Icon } from '@iconify/react';

const SignUp = () => {
    const { t } = useTranslation();
    const { register, handleSubmit, formState: { errors } } = useForm<SignUpFormData>({
        resolver: yupResolver(signUpSchema(t)),
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
                        <FormControl>
                            <InputLabel>Phone Number</InputLabel>
                            <div className="form__row__2__columns">
                                <Select style={{ width: "104px" }}>
                                    <Option
                                        value="+855"
                                        label={
                                            <div className="country__selected">
                                                <Icon icon="circle-flags:kh" />
                                                <span>+855</span>
                                            </div>
                                        }
                                    >
                                        <div className="country__phone__container">
                                            <div className="country__phone__info">
                                                <Icon icon="circle-flags:kh" />
                                            </div>
                                            <div className="country__code">+855</div>
                                        </div>
                                    </Option>
                                    <Option
                                        value="+86"
                                        label={
                                            <div className="country__selected">
                                                <Icon icon="circle-flags:cn" />
                                                <span>+86</span>
                                            </div>
                                        }
                                    >
                                        <div className="country__phone__container">
                                            <div className="country__phone__info">
                                                <Icon icon="circle-flags:cn" />
                                            </div>
                                            <div className="country__code">+86</div>
                                        </div>
                                    </Option>
                                    <Option
                                        value="+66"
                                        label={
                                            <div className="country__selected">
                                                <Icon icon="circle-flags:th" />
                                                <span>+66</span>
                                            </div>
                                        }
                                    >
                                        <div className="country__phone__container">
                                            <div className="country__phone__info">
                                                <Icon icon="circle-flags:th" />
                                            </div>
                                            <div className="country__code">+66</div>
                                        </div>
                                    </Option>
                                </Select>
                                <TextField type="number" fullWidth
                                    error={!!errors.phone}
                                    helperText={errors.phone?.message}
                                    {...register("phone")}
                                />
                            </div>
                        </FormControl>
                        <FormControl>
                            <InputLabel>{t('signup.username')}</InputLabel>
                            <TextField type="text" fullWidth
                                error={!!errors.username}
                                helperText={errors.username?.message}
                                {...register("username")}
                            />
                        </FormControl>
                        <FormControl>
                            <InputLabel>{t('signup.password')}</InputLabel>
                            <TextField type="password" fullWidth
                                error={!!errors.password}
                                helperText={errors.password?.message}
                                {...register("password")}
                            />
                        </FormControl>
                        <FormControl>
                            <InputLabel>{t('signup.confirmPassword')}</InputLabel>
                            <TextField type="password" fullWidth
                                error={!!errors.confirm_password}
                                helperText={errors.confirm_password?.message}
                                {...register("confirm_password")}
                            />
                        </FormControl>
                        <FormControl>
                            <InputLabel>{t('signup.withdraw_code')}</InputLabel>
                            <TextField type="number" fullWidth
                                error={!!errors.withdraw_code}
                                helperText={errors.withdraw_code?.message}
                                {...register("withdraw_code")}
                            />
                        </FormControl>
                        <FormControl>
                            <InputLabel>{t('signup.referral_code')}</InputLabel>
                            <TextField type="number" fullWidth
                                {...register("referral_code")}
                            />
                        </FormControl>
                    </div>
                    <div className="auth__button__container">
                        <Button type="submit" color="primary">{t('signup.buttonName')}</Button>
                    </div>
                    <div className="auth__footer">
                        <p>{t('signup.footerText')} <Link to="/login">{t('signup.footerLink')}</Link></p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp