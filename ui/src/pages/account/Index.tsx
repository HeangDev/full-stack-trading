import { useNavigate } from 'react-router';
import { Icon } from '@iconify/react';
import { useTranslation } from 'react-i18next'

const Profile = () => {
    const { t, i18n } = useTranslation();
    const currentLang = i18n.language;
    const navigate = useNavigate();
    return (
        <>
            <div className="profilePanel__container">
                <div className="profilePanel__container__img">
                    <img src="https://mockmind-api.uifaces.co/content/human/218.jpg" alt=""/>
                </div>
                <div className="profilePanel__container__name">
                    <h4>John Doe</h4>
                    <p>johndoe123@mail.com</p>
                </div>
            </div>
            <div className="settingPanel__container">
                <div className="settingPanel__container__items">
                    <div onClick={() => navigate("/referral_code")} className="settingPanel__container__items__item">
                        <div className="settingPanel__container__items__title">
                            <div className="settingPanel__container__items__icon">
                                <Icon icon="solar:bag-3-bold" />
                            </div>
                            <span>{t('account.referralcode')}</span>
                        </div>
                        <div className="settingPanel__container__items__right">
                            <Icon icon="solar:alt-arrow-right-line-duotone" />
                        </div>
                    </div>
                    <div onClick={() => navigate("/history")} className="settingPanel__container__items__item">
                        <div className="settingPanel__container__items__title">
                            <div className="settingPanel__container__items__icon">
                                <Icon icon="solar:history-bold" />
                            </div>
                            <span>{t('account.history')}</span>
                        </div>
                        <div className="settingPanel__container__items__right">
                            <Icon icon="solar:alt-arrow-right-line-duotone" />
                        </div>
                    </div>
                    <div onClick={() => navigate("/bank")} className="settingPanel__container__items__item">
                        <div className="settingPanel__container__items__title">
                            <div className="settingPanel__container__items__icon">
                                <Icon icon="solar:banknote-bold" />
                            </div>
                            <span>{t('account.bank')}</span>
                        </div>
                        <div className="settingPanel__container__items__right">
                            <Icon icon="solar:alt-arrow-right-line-duotone" />
                        </div>
                    </div>
                </div>
                <div className="settingPanel__container__items">
                    <div onClick={() => navigate("/notification")} className="settingPanel__container__items__item">
                        <div className="settingPanel__container__items__title">
                            <div className="settingPanel__container__items__icon">
                                <Icon icon="solar:bell-bold" />
                            </div>
                            <span>{t('account.notification')}</span>
                        </div>
                        <div className="settingPanel__container__items__right">
                            <span className="notification__count">10</span>
                            <Icon icon="solar:alt-arrow-right-line-duotone" />
                        </div>
                    </div>
                    <div onClick={() => navigate("/change_password")} className="settingPanel__container__items__item">
                        <div className="settingPanel__container__items__title">
                            <div className="settingPanel__container__items__icon">
                                <Icon icon="solar:lock-keyhole-bold" />
                            </div>
                            <span>{t('account.changepassword')}</span>
                        </div>
                        <div className="settingPanel__container__items__right">
                            <Icon icon="solar:alt-arrow-right-line-duotone" />
                        </div>
                    </div>
                    <div onClick={() => navigate("/language")} className="settingPanel__container__items__item">
                        <div className="settingPanel__container__items__title">
                            <div className="settingPanel__container__items__icon">
                                <Icon icon="solar:planet-bold" />
                            </div>
                            <span>{t('account.language')}</span>
                        </div>
                        <div className="settingPanel__container__items__right">
                            {(() => {
                                const shortLang = currentLang.split("-")[0];
                                const langKeyMap: Record<string, string> = {
                                    en: "english",
                                    th: "thailand",
                                    cn: "china"
                                };
                                const langKey = langKeyMap[shortLang] || "english";
                                return <span>{t(`lang.${langKey}`)}</span>;
                            })()}
                            <Icon icon="solar:alt-arrow-right-line-duotone" />
                        </div>
                    </div>
                </div>
                <div className="settingPanel__container__items">
                    <div className="settingPanel__container__items__item">
                        <div className="settingPanel__container__items__title">
                            <div className="settingPanel__container__items__icon">
                                <Icon icon="solar:logout-bold" />
                            </div>
                            <span>{t('account.logout')}</span>
                        </div>
                        <div className="settingPanel__container__items__right">
                            <Icon icon="solar:alt-arrow-right-line-duotone" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile