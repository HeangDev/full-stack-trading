import TextField from '../../components/TextField';
import Button from '../../components/Button'

import { useTranslation } from 'react-i18next'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { changePasswordSchema } from "../../schemas/changePasswordSchema";
import type { ChangePsswordFormData } from "../../schemas/changePasswordSchema";

const ChangePassword = () => {
    const { t } = useTranslation();
    const { register, handleSubmit, formState: { errors } } = useForm<ChangePsswordFormData>({
        resolver: yupResolver(changePasswordSchema),
    });

    const handleChangePassword = async (data: ChangePsswordFormData) => {

    }
    return (
        <>
            <div className="auth__form">
                <form onSubmit={handleSubmit(handleChangePassword)} autoComplete="off">
                    <div className="auth__form__container">
                        <TextField type="text" fullWidth label="Current Psssword"
                            error={!!errors.current_password}
                            helperText={errors.current_password?.message}
                            {...register("current_password")}
                        />
                        <TextField type="text" fullWidth label="New Psssword"
                            error={!!errors.new_password}
                            helperText={errors.new_password?.message}
                            {...register("new_password")}
                        />
                        <TextField type="text" fullWidth label="Confirm Psssword"
                            error={!!errors.confirm_password}
                            helperText={errors.confirm_password?.message}
                            {...register("confirm_password")}
                        />
                    </div>
                    <div className="auth__button__container">
                        <Button type="submit" color="primary">{t('changePassword.button')}</Button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default ChangePassword