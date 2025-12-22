import React from "react";
import { useTranslation } from 'react-i18next'
import Button from "../../components/Button";
import TextField from "../../components/TextField";

const Deposit = () => {
    const { t } = useTranslation()
    const [selectedAmount, setSelectedAmount] = React.useState<number | ''>('');
    const amounts = [100, 200, 300, 500, 1000, 5000];

    return (
        <>
            <div className="deposit__container">
                <div className="balance__assets">

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
                        placeholder="៛100.00 - ៛50,000.00"
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
                <div className="deposit__content__fixed">
                    <div className="deposit__content__fixed__box">
                        <Button
                            type="button"
                            color="primary"
                            disabled={!selectedAmount}
                        >
                            {t('deposit.submit')} {selectedAmount ? <span>៛{selectedAmount}</span> : null}
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Deposit