import { useLocation, useNavigate } from "react-router"
import { useTranslation } from "react-i18next"
import { Icon } from "@iconify/react"

const tabs = [
    { href: "/home", label: "home", icon: "solar:home-2-broken", iconOn: "solar:home-2-bold" },
    { href: "/market", label: "markets", icon: "solar:chart-square-broken", iconOn: "solar:chart-square-bold" },
    { href: "/order", label: "order", icon: "solar:cart-large-2-broken", iconOn: "solar:cart-large-2-bold" },
    { href: "/account", label: "account", icon: "solar:user-circle-broken", iconOn: "solar:user-circle-bold" },
];

const Tab = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const { t } = useTranslation()

    return (
        <>
            <div className="tabbar">
                {tabs.map((tab) => {
                    const isActive = location.pathname === tab.href;
                    return (
                        <div
                            key={tab.href}
                            onClick={() => navigate(tab.href)}
                            className={`tabbar__item ${isActive ? "on" : ""}`}
                        >
                            {typeof tab.icon === "string" ? (
                                <Icon icon={isActive ? tab.iconOn : tab.icon}/>
                            ) : (
                                tab.icon
                            )}
                            <span>{t(`tab.${tab.label}`)}</span>
                        </div>
                    );
                })}
            </div>
        </>
    )
}

export default Tab