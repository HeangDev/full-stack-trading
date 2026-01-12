import React from "react";
import Button from "../../components/Button";
import { FormControl, InputLabel, TextField } from '../../components/TextField';
import Popup from "../../components/Popup";

import { Icon } from '@iconify/react';
import { useTranslation } from 'react-i18next'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { withdrawSchema } from "../../schemas/withdrawSchema";
import type { WithdrawFormData } from "../../schemas/withdrawSchema"

const Withdraw = () => {
    const [openPopup, setOpenPopup] = React.useState(false);
    const { t } = useTranslation();
    const { register, handleSubmit, formState: { errors } } = useForm<WithdrawFormData>({
        resolver: yupResolver(withdrawSchema(t)),
        shouldFocusError: true
    });

    const handleWithdarw = async (data: WithdrawFormData) => {
        console.log(data)
    }

    return (
        <>
            <div className="auth__form">
                <form onSubmit={handleSubmit(handleWithdarw)} autoComplete="off">
                    <div className="auth__form__container">
                        <FormControl>
                            <InputLabel>{t('withdarw.balance')}</InputLabel>
                            <TextField type="text" disabled fullWidth
                                value="1000"
                                {...register("balance")}
                            />
                        </FormControl>
                        <FormControl>
                            <InputLabel>{t('withdarw.amount')}</InputLabel>
                            <TextField type="text" fullWidth
                                error={!!errors.amount}
                                helperText={errors.amount?.message}
                                {...register("amount")}
                            />
                        </FormControl>
                        <FormControl>
                            <InputLabel>{t('withdarw.code')}</InputLabel>
                            <TextField type="text" fullWidth
                                error={!!errors.code}
                                helperText={errors.code?.message}
                                {...register("code")}
                            />
                        </FormControl>
                        <FormControl>
                            <InputLabel>{t('withdarw.fee')}</InputLabel>
                            <TextField type="text" disabled fullWidth
                                {...register("fee")}
                            />
                        </FormControl>
                        <FormControl>
                            <InputLabel>{t('withdarw.reason')}</InputLabel>
                            <TextField type="text" fullWidth multiline
                                row={3}
                                {...register("reason")}
                            />
                        </FormControl>
                    </div>
                    <div className="buttonPanel__fixed__container">
                        <div className="buttonPanel__fixed__box">
                            <Button type="submit" color="primary" onClick={() => setOpenPopup(true)}>{t('withdarw.submit')}</Button>
                        </div>
                    </div>
                </form>
            </div>
            <Popup
                open={openPopup}
                onClose={() => setOpenPopup(false)}
            >
                <div className="alertPanel__container">
                    <div className="alertPanel__icon">
                        <Icon icon="solar:danger-circle-linear"/>
                    </div>
                    <h4>{t('alert.alert_withdraw_tit')}</h4>
                    <div className="alertPanel__button">
                        <Button type="button" color="success">{t('alert.alert_btn_ok')}</Button>
                        <Button type="button" color="secondary" onClick={() => setOpenPopup(false)}>{t('alert.alert_btn_cancel')}</Button>
                    </div>
                </div>
            </Popup>
        </>
    )
}

export default Withdraw