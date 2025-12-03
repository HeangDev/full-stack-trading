import { Icon } from '@iconify/react'
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';

const Language = () => {
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();

    const languages = [
        { code: 'en', label: 'english', flag: 'circle-flags:en' },
        { code: 'th', label: 'thailand', flag: 'circle-flags:th' },
        { code: 'cn', label: 'china', flag: 'circle-flags:cn' }
    ];

    const handleLanguageChange = (code: string) => {
        i18n.changeLanguage(code);
        localStorage.setItem('lang', code);
        navigate('/account');
    };

    return (
        <>
            <div className="languages__container">
                <div className="languages__list">
                    {languages.map((lang) => {
                    const isActive = i18n.language === lang.code;
                    return (
                            <div
                                key={lang.code}
                                className={`languages__item ${isActive ? "active" : ""}`}
                                onClick={() => handleLanguageChange(lang.code)}
                                >
                                <div className="languages__item__title">
                                    <Icon icon={lang.flag} width="24" height="24"/>
                                    <span>{t(`lang.${lang.label}`)}</span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    )
}

export default Language