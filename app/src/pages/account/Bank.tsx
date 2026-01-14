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
                        <FormControl>
                            <InputLabel>Bank Type</InputLabel>
                            <Select headerSearch>
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
                        </FormControl>
                        <FormControl>
                            <InputLabel>{t('bank.bank_name')}</InputLabel>
                            <TextField type="text" fullWidth
                                error={!!errors.bank_name}
                                {...register("bank_name")}
                            />
                            <HelperText error>{errors.bank_name?.message}</HelperText>
                        </FormControl>
                        <FormControl>
                            <InputLabel>{t('bank.bank_account')}</InputLabel>
                            <TextField type="text" fullWidth
                                error={!!errors.bank_account}
                                {...register("bank_account")}
                            />
                            <HelperText error>{errors.bank_account?.message}</HelperText>
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