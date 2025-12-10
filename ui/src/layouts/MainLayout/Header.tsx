import { useLocation, useNavigate } from "react-router"
import { useTranslation } from "react-i18next";
import { Icon } from '@iconify/react'

const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { t } = useTranslation()

    // paths that show center title
    const specialPaths: Record<string, string> = {
        "/language": "header.language",
        "/setting": "header.settings",
        "/referral_code": "header.referralcode",
        "/change_password": "header.changepassword",
    }

    // paths that show left title (NO BACK BUTTON)
    const leftHeaderText: Record<string, string> = {
        "/home": "header.home",
        "/account": "header.profile",
        "/order": "header.order"
    }

    const matchedSpecial = Object.keys(specialPaths).find(path =>
        location.pathname.startsWith(path)
    );
    const matchedLeft = Object.keys(leftHeaderText).find(path =>
        location.pathname.startsWith(path)
    );

    const leftTitle = matchedLeft ? t(leftHeaderText[matchedLeft]) : "";
    const centerTitle = matchedSpecial ? t(specialPaths[matchedSpecial]) : "";

    // RULE:
    // if left title exists -> hide back button
    // if back button shows -> hide left title
    const showLeftTitle = !!leftTitle;
    const showBackButton = !showLeftTitle; // mutually exclusive

    return (
        <>
            <div className="header">
                <div className="header__inner">
                    <div className="header__content">
                        <div className="header__content__left">
                            {showLeftTitle && <h4>{leftTitle}</h4>}
                            {showBackButton && (
                                <div onClick={() => navigate(-1)} className="header__btn__back">
                                    <Icon icon="solar:alt-arrow-left-line-duotone" width="24" height="24" />
                                </div>
                            )}
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