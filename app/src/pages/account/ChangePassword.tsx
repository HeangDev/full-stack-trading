import Button from '../../components/Button'
import { FormControl, InputLabel, TextField } from '../../components/TextField';

import { useTranslation } from 'react-i18next'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { changePasswordSchema } from "../../schemas/changePasswordSchema";
import type { ChangePsswordFormData } from "../../schemas/changePasswordSchema";

const ChangePassword = () => {
    const { t } = useTranslation();
    const { register, handleSubmit, formState: { errors } } = useForm<ChangePsswordFormData>({
        resolver: yupResolver(changePasswordSchema(t)),
    });

    const handleChangePassword = async (data: ChangePsswordFormData) => {
        console.log(data)
    }
    return (
        <>
            <div className="auth__form">
                <form onSubmit={handleSubmit(handleChangePassword)} autoComplete="off">
                    <div className="auth__form__container">
                        <FormControl>
                            <InputLabel>{t('changePassword.old_password')}</InputLabel>
                            <TextField type="password" fullWidth
                                error={!!errors.current_password}
                                helperText={errors.current_password?.message}
                                {...register("current_password")}
                            />
                        </FormControl>
                        <FormControl>
                            <InputLabel>{t('changePassword.new_password')}</InputLabel>
                            <TextField type="password" fullWidth
                                error={!!errors.new_password}
                                helperText={errors.new_password?.message}
                                {...register("new_password")}
                            />
                        </FormControl>
                        <FormControl>
                            <InputLabel>{t('changePassword.confirm_password')}</InputLabel>
                            <TextField type="password" fullWidth
                                error={!!errors.confirm_password}
                                helperText={errors.confirm_password?.message}
                                {...register("confirm_password")}
                            />
                        </FormControl>
                    </div>
                    <div className="buttonPanel__fixed__container">
                        <div className="buttonPanel__fixed__box">
                            <Button type="submit" color="primary">{t('changePassword.button')}</Button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default ChangePassword