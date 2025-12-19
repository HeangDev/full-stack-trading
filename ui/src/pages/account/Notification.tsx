import { Icon } from "@iconify/react"
import { useTranslation } from 'react-i18next'
import ImgNotification from "../../assets/img/bg/bg_notification.png"

const Notification = () => {
    const { t } = useTranslation();
    return (
        <>
            <div className="notification__list__container">
                <div className="notification__list__container__items">
                    <div className="notification__list__container__item">
                        <div className="notification__list__container__item__icon">
                            <Icon icon="solar:wallet-bold"/>
                        </div>
                        <div className="notification__list__container__item__text">
                            <h4>Withdrawal successful</h4>
                            <p>You’ve withdrawn $400.00 to your linked bank account</p>
                            <span>Aug 12, 2025 · 8:42 AM</span>
                        </div>
                    </div>
                    <div className="notification__list__container__item unread">
                        <div className="notification__list__container__item__icon">
                            <Icon icon="solar:download-minimalistic-linear"/>
                        </div>
                        <div className="notification__list__container__item__text">
                            <h4>Deposit successful<div className="unread__dot"></div></h4>
                            <p>You’ve deposit $400.00 to your linked bank account</p>
                            <span>Dec 18, 2025 · 8:42 AM</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="nodata__container">
                <div className="nodata__img">
                    <img src={ImgNotification}/>
                </div>
                <div className="nodata__title">
                    <h4>{t('notification.notification_empty_title')}</h4>
                    <p>{t('notification.notification_empty_dec')}</p>
                </div>
            </div>
        </>
    )
}

export default Notification