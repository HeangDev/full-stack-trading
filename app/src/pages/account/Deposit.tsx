import React from "react";
import Button from "../../components/Button";
import TextField from "../../components/TextField";
import Popup from "../../components/Popup";

import { useTranslation } from 'react-i18next'
import { formatToSIPrefix } from '../../utils/currencyFormat';
import { Icon } from '@iconify/react';
import bgAssets from '../../assets/img/bg/bg_total_assets.png';

const Deposit = () => {
    const { t } = useTranslation()
    const [selectedAmount, setSelectedAmount] = React.useState<number | ''>('');
    const [openPopup, setOpenPopup] = React.useState(false);
    const amounts = [100, 200, 300, 500, 1000, 5000];

    return (
        <>
            <div className="deposit__container">
                <div className="balance__assets" style={{ backgroundImage: `url(${bgAssets})` }}>
                    <div className="balance__assets__header">
                        <Icon icon="solar:wallet-money-bold" />
                        <p>{t('deposit.balance')}</p>
                    </div>
                    <div className="balance__assets__main">
                        <h4>${formatToSIPrefix(10000)}</h4>
                    </div>
                </div>
                <div className="deposit__content">
                    <div className="deposit__content__title">
                        <h4>{t('deposit.enter_amount')}</h4>
                    </div>
                    <div className="deposit__content__list">
                        {amounts.map((amount) => (
                            <div
                                key={amount}
                                className={`deposit__content__list__item${selectedAmount === amount ? ' active' : ''}`}
                            >
                                <Button
                                    type="button"
                                    variant="outlined"
                                    color="secondary"
                                    onClick={() => setSelectedAmount(amount)}
                                >
                                    {amount >= 1000 ? `${amount / 1000}K` : amount}
                                </Button>
                            </div>
                        ))}
                    </div>
                    <TextField type="text"
                        value={selectedAmount}
                        placeholder="$100.00 - $50,000.00"
                        onChange={(e: { target: { value: string; }; }) => setSelectedAmount(e.target.value === '' ? '' : Number(e.target.value))}
                    />
                </div>
                <div className="deposit__content">
                    <div className="deposit__content__title">
                        <h4>{t('deposit.instruction_title')}</h4>
                    </div>
                    <div className="deposit__container__intro__lists">
                        <div className="items">
                            <p>{t('deposit.instruction_1')}</p>
                            <p>{t('deposit.instruction_2')}</p>
                            <p>{t('deposit.instruction_3')}</p>
                            <p>{t('deposit.instruction_4')}</p>
                        </div>
                    </div>
                </div>
                <div className="buttonPanel__fixed__container">
                    <div className="buttonPanel__fixed__box">
                        <Button
                            type="button"
                            color="primary"
                            disabled={!selectedAmount}
                            onClick={() => setOpenPopup(true)}
                        >
                            {t('deposit.submit')} {selectedAmount ? <span>${selectedAmount}</span> : null}
                        </Button>
                    </div>
                </div>
            </div>

            <Popup
                open={openPopup}
                onClose={() => setOpenPopup(false)}
            >
                <div className="alertPanel__container">
                    <div className="alertPanel__icon">
                        <Icon icon="solar:danger-circle-linear"/>
                    </div>
                    <h4>{t('alert.alert_deposit_tit')}</h4>
                    <div className="alertPanel__button">
                        <Button type="button" color="success">{t('alert.alert_btn_ok')}</Button>
                        <Button type="button" color="secondary" onClick={() => setOpenPopup(false)}>{t('alert.alert_btn_cancel')}</Button>
                    </div>
                </div>
            </Popup>
        </>
    )
}

export default Deposit