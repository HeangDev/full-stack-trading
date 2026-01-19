import Button from '../../components/Button'
import { Select, Option } from '../../components/Select';
import TextField from '../../components/Form/TextField';
import FormControl from '../../components/Form/FormControl';
import InputLabel from '../../components/Form/InputLabel';
import HelperText from '../../components/Form/HelperText';

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
                        <FormControl>
                            <InputLabel>{t('bank.account_holder_name')}</InputLabel>
                            <TextField type="text" fullWidth
                                placeholder={t('bank_placeholder.account_holder_name_placeholder')}
                                error={!!errors.bank_account_holder}
                                {...register("bank_account_holder")}
                            />
                            <HelperText error>{errors.bank_account_holder?.message}</HelperText>
                        </FormControl>
                        <FormControl>
                            <InputLabel>{t('bank.bank_account')}</InputLabel>
                            <TextField type="text" fullWidth
                                placeholder={t('bank_placeholder.bank_account_placeholder')}
                                error={!!errors.bank_account}
                                {...register("bank_account")}
                            />
                            <HelperText error>{errors.bank_account?.message}</HelperText>
                        </FormControl>
                        <FormControl>
                            <InputLabel>{t('bank.bank_name')}</InputLabel>
                            <TextField type="text" fullWidth
                                placeholder={t('bank_placeholder.bank_name_placeholder')}
                                error={!!errors.bank_name}
                                {...register("bank_name")}
                            />
                            <HelperText error>{errors.bank_name?.message}</HelperText>
                        </FormControl>
                        <FormControl>
                            <InputLabel>{t('bank.account_type')}</InputLabel>
                            <Select>
                                <Option value="Saving Account">{t('bank.account_type_select.saving_account')}</Option>
                                <Option value="Checking Account">{t('bank.account_type_select.checking_account')}</Option>
                                <Option value="Money market Account">{t('bank.account_type_select.money_market_account')}</Option>
                                <Option value="Certificate of deposit Account">{t('bank.account_type_select.certificate_of_deposit_account')}</Option>
                            </Select>
                        </FormControl>
                    </div>
                    <div className="buttonPanel__fixed__container">
                        <div className="buttonPanel__fixed__box">
                            <Button type="submit" color="primary">{t('bank.button')}</Button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Bank