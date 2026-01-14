import React from "react";
import Button from "../../components/Button";
import TextField from '../../components/Form/TextField';
import FormControl from '../../components/Form/FormControl';
import InputLabel from '../../components/Form/InputLabel';
import HelperText from '../../components/Form/HelperText';
import Popup from "../../components/Popup";

import { Icon } from '@iconify/react';
import { useTranslation } from 'react-i18next'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { withdrawSchema } from "../../schemas/withdrawSchema";
import type { WithdrawFormData } from "../../schemas/withdrawSchema"
import { formatToSIPrefix } from '../../utils/currencyFormat';
import bgAssets from '../../assets/img/bg/bg_total_assets.png';

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
            <div className="balance__assets" style={{ backgroundImage: `url(${bgAssets})` }}>
                    <div className="balance__assets__header">
                        <Icon icon="solar:wallet-money-bold" />
                        <p>{t('deposit.balance')}</p>
                    </div>
                    <div className="balance__assets__main">
                        <h4>${formatToSIPrefix(10000)}</h4>
                    </div>
                </div>
            <div className="auth__form">
                <form onSubmit={handleSubmit(handleWithdarw)} autoComplete="off">
                    <div className="auth__form__container">
                        <FormControl>
                            <InputLabel>{t('withdarw.amount')}</InputLabel>
                            <TextField type="text" fullWidth
                                error={!!errors.amount}
                                {...register("amount")}
                            />
                            <HelperText error>{errors.amount?.message}</HelperText>
                        </FormControl>
                        <FormControl>
                            <InputLabel>{t('withdarw.code')}</InputLabel>
                            <TextField type="text" fullWidth
                                error={!!errors.code}
                                {...register("code")}
                            />
                            <HelperText error>{errors.code?.message}</HelperText>
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