import { useLocation, useNavigate } from "react-router"
import { useTranslation } from "react-i18next"
import { Icon } from "@iconify/react"

const tabs = [
    { href: "/home", label: "home", icon: "solar:home-2-outline" },
    { href: "/activity", label: "activity", icon: "solar:pie-chart-2-linear" },
    { href: "/order", label: "order", icon: "solar:airbuds-case-minimalistic-linear" },
    { href: "/account", label: "account", icon: "solar:user-linear" },
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
                            className={`tabbar__item ${tab.label} ${isActive ? "active" : ""}`}
                        >
                            {typeof tab.icon === "string" ? (
                                <Icon icon={tab.icon} width="24" height="24" />
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