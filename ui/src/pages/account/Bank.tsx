import TextField from '../../components/TextField';
import Button from '../../components/Button'

import { useTranslation } from 'react-i18next'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { bankSchema } from '../../schemas/bankSchema';
import type { BankFormData } from '../../schemas/bankSchema';

const Bank = () => {
    const { t } = useTranslation();
    const { register, handleSubmit, formState: { errors } } = useForm<BankFormData>({
        resolver: yupResolver(bankSchema(t)),
    });

    const handleCreateBank = async (data: BankFormData) => {
        console.log(data)
    }
    return (
        <>
            <div className="auth__form">
                <form onSubmit={handleSubmit(handleCreateBank)} autoComplete="off">
                    <div className="auth__form__container">
                        <TextField type="text" fullWidth label={t('bank.bank_name')}
                            error={!!errors.bank_name}
                            helperText={errors.bank_name?.message}
                            {...register("bank_name")}
                        />
                        <TextField type="text" fullWidth label={t('bank.bank_account')}
                            error={!!errors.bank_account}
                            helperText={errors.bank_account?.message}
                            {...register("bank_account")}
                        />
                    </div>
                    <div className="auth__button__container">
                        <Button type="submit" color="primary">{t('bank.button')}</Button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Bank