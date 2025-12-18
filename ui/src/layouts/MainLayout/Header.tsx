import { useLocation, useNavigate } from "react-router"
import { useTranslation } from "react-i18next";
import { Icon } from "@iconify/react"

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
        "/notification": "header.notification",
        "/bank": "header.bank",
        "/history": "header.history",
    }

    // paths that show left title (NO BACK BUTTON)
    const leftHeaderText: Record<string, string> = {
        "/home": "header.home",
        "/market": "header.market",
        "/account": "header.account",
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

    const showBellIcon = [
        "/home",
        "/market",
        "/order",
        "/account"
    ].some(path => location.pathname.startsWith(path))

    const showCalendarIcon = location.pathname.startsWith("/history")

    return (
        <>
            <div className="header">
                <div className="header__inner">
                    <div className="header__content">
                        <div className="header__content__left">
                            {showLeftTitle && <h4>{leftTitle}</h4>}
                            {showBackButton && (
                                <div onClick={() => navigate(-1)} className="header__btn__back">
                                    <Icon icon="solar:arrow-left-linear"/>
                                </div>
                            )}
                        </div>
                        <div className="header__content__center">
                            <h4>{centerTitle}</h4>
                        </div>
                        <div className="header__content__right">
                            {showBellIcon && (
                                <div onClick={() => navigate("/notification")} className="header__btn__back">
                                    <Icon icon="solar:bell-linear"/>
                                    <div className="notification__dot"></div>
                                </div>
                            )}
                            {showCalendarIcon && (
                                <div className="header__btn__back">
                                    <Icon icon="solar:calendar-linear"/>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header