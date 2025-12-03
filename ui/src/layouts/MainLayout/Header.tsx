import { useLocation, useNavigate } from "react-router"
import { useTranslation } from "react-i18next";
import { Icon } from '@iconify/react'

const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { t } = useTranslation()

    const specialPaths: Record<string, string> = {
        "/language": "header.language",
        "/setting": "header.settings",
        "/referral_code": "header.referralcode",
        "/change_password": "header.changepassword",
    }

    const currentPathKey = Object.keys(specialPaths).find(path =>
        location.pathname.startsWith(path)
    )
    
    const centerTitle = currentPathKey ? t(specialPaths[currentPathKey]) : "";
    return (
        <>
            <div className="header">
                <div className="header__inner">
                    <div className="header__content">
                        <div className="header__content__left">
                            <div onClick={() => navigate(-1)} className="header__btn__back">
                                <Icon icon="solar:alt-arrow-left-line-duotone" width="24" height="24" />
                            </div>
                        </div>
                        <div className="header__content__center">
                            <h4>{centerTitle}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header