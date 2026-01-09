import TextField from '../../components/TextField';
import Button from '../../components/Button'
import { Select, Option } from '../../components/Select';

import { useTranslation } from 'react-i18next'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { bankSchema } from '../../schemas/bankSchema';
import type { BankFormData } from '../../schemas/bankSchema';
import { Icon } from '@iconify/react';

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
                        <Select>
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
                                        <div className="country__name">Cambodia</div>
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
                                        <div className="country__name">China</div>
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
                                        <div className="country__name">Thailand</div>
                                    </div>
                                    <div className="country__code">+66</div>
                                </div>
                            </Option>
                        </Select>
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