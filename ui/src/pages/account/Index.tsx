import { useNavigate } from 'react-router';
import { Icon } from '@iconify/react';
import { useTranslation } from 'react-i18next'

import IcGift from "../../assets/img/ic/ic_gift.png"

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
            <div onClick={() => navigate("/referral_code")} className="referralPanel__container">
                <div className="referralPanel__container__left">
                    <img src={IcGift} alt=""/>
                </div>
                <div className="referralPanel__container__right">
                    <h4>Referral Code</h4>
                    <p>Share your friend get $20 of free stocks</p>
                </div>
            </div>
            <hr className="block__line"/>
            <div className="settingPanel__container">
                <div className="settingPanel__container__items">
                    <div onClick={() => navigate("/history")} className="settingPanel__container__items__item">
                        <div className="settingPanel__container__items__title">
                            <div className="settingPanel__container__items__icon">
                                <Icon icon="solar:history-broken" width="24" height="24" />
                            </div>
                            <span>{t('account.history')}</span>
                        </div>
                        <div className="settingPanel__container__items__right">
                            <Icon icon="solar:alt-arrow-right-line-duotone" width="24" height="24" />
                        </div>
                    </div>
                    <div onClick={() => navigate("/bank")} className="settingPanel__container__items__item">
                        <div className="settingPanel__container__items__title">
                            <div className="settingPanel__container__items__icon">
                                <Icon icon="solar:hand-money-outline" width="24" height="24" />
                            </div>
                            <span>{t('account.bank')}</span>
                        </div>
                        <div className="settingPanel__container__items__right">
                            <Icon icon="solar:alt-arrow-right-line-duotone" width="24" height="24" />
                        </div>
                    </div>
                    <div onClick={() => navigate("/change_password")} className="settingPanel__container__items__item">
                        <div className="settingPanel__container__items__title">
                            <div className="settingPanel__container__items__icon">
                                <Icon icon="solar:lock-password-bold-duotone" width="24" height="24" />
                            </div>
                            <span>{t('account.changepassword')}</span>
                        </div>
                        <div className="settingPanel__container__items__right">
                            <Icon icon="solar:alt-arrow-right-line-duotone" width="24" height="24" />
                        </div>
                    </div>
                    <div onClick={() => navigate("/language")} className="settingPanel__container__items__item">
                        <div className="settingPanel__container__items__title">
                            <div className="settingPanel__container__items__icon">
                                <Icon icon="solar:planet-bold-duotone" width="24" height="24" />
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
                            <Icon icon="solar:alt-arrow-right-line-duotone" width="24" height="24" />
                        </div>
                    </div>
                    <div className="settingPanel__container__items__item">
                        <div className="settingPanel__container__items__title">
                            <div className="settingPanel__container__items__icon">
                                <Icon icon="solar:logout-line-duotone" width="24" height="24" />
                            </div>
                            <span>{t('account.logout')}</span>
                        </div>
                        <div className="settingPanel__container__items__right">
                            <Icon icon="solar:alt-arrow-right-line-duotone" width="24" height="24" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile