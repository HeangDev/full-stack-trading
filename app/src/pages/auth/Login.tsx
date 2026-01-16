import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../schemas/loginSchema";
import type { LoginFormData } from "../../schemas/loginSchema";
import { Link } from "react-router";
import { useTranslation } from 'react-i18next'
import { Icon } from '@iconify/react';
import { Select, Option } from '../../components/Select';
import { useDispatch } from "react-redux";
import { login } from "../../redux/slices/authSlice";
import type { AppDispatch } from "../../redux/store";

import TextField from "../../components/Form/TextField";
import FormControl from "../../components/Form/FormControl";
import InputLabel from "../../components/Form/InputLabel";
import HelperText from "../../components/Form/HelperText";
import Button from '../../components/Button'
import Logo from "../../assets/img/logo.png"

const Login = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch<AppDispatch>();
    const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>({
        resolver: yupResolver(loginSchema(t)),
    });
    const handleLogin = async (data: LoginFormData) => {
        dispatch(login({
            country_code: data.country_code,
            phone_number: data.phone,
            password: data.password,
        }));
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
                        <FormControl>
                            <InputLabel>{t('login.phone_number')}</InputLabel>
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
                                    {...register("phone")}
                                    placeholder={t('login.phone_number_placeholder')}
                                />
                            </div>
                            <HelperText error>{errors.phone?.message}</HelperText>
                        </FormControl>
                        <FormControl>
                            <InputLabel>{t('login.password')}</InputLabel>
                            <TextField type="password" fullWidth
                                error={!!errors.password}
                                {...register("password")}
                            />
                            <HelperText error>{errors.password?.message}</HelperText>
                        </FormControl>
                    </div>
                    <div className="auth__button__container">
                        <Button type="submit" color="primary">{t('login.buttonName')}</Button>
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