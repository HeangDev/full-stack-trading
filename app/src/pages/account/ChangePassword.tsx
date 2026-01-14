import Button from '../../components/Button'
import TextField from '../../components/Form/TextField';
import FormControl from '../../components/Form/FormControl';
import InputLabel from '../../components/Form/InputLabel';
import HelperText from '../../components/Form/HelperText';

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
                                {...register("current_password")}
                            />
                            <HelperText error>{errors.current_password?.message}</HelperText>
                        </FormControl>
                        <FormControl>
                            <InputLabel>{t('changePassword.new_password')}</InputLabel>
                            <TextField type="password" fullWidth
                                error={!!errors.new_password}
                                {...register("new_password")}
                            />
                            <HelperText error>{errors.new_password?.message}</HelperText>
                        </FormControl>
                        <FormControl>
                            <InputLabel>{t('changePassword.confirm_password')}</InputLabel>
                            <TextField type="password" fullWidth
                                error={!!errors.confirm_password}
                                {...register("confirm_password")}
                            />
                            <HelperText error>{errors.confirm_password?.message}</HelperText>
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