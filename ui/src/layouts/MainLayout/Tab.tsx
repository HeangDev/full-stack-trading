import { useLocation, useNavigate } from "react-router"
import { useTranslation } from "react-i18next"

import IcHome from "../../assets/img/ic/ic_home.png"
import IcMarket from "../../assets/img/ic/ic_market.png"
import IcTrade from "../../assets/img/ic/ic_trade.png"
import IcWallet from "../../assets/img/ic/ic_wallet.png"

import IcHomeOn from "../../assets/img/ic/ic_home_on.png"
import IcMarketOn from "../../assets/img/ic/ic_market_on.png"
import IcTradeOn from "../../assets/img/ic/ic_trade_on.png"
import IcWalletOn from "../../assets/img/ic/ic_wallet_on.png"

const tabs = [
    { href: "/home", label: "home", icon: IcHome, iconOn: IcHomeOn },
    { href: "/activity", label: "markets", icon: IcMarket, iconOn: IcMarketOn },
    { href: "/order", label: "order", icon: IcTrade, iconOn: IcTradeOn },
    { href: "/account", label: "account", icon: IcWallet, iconOn: IcWalletOn },
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
                                <img src={isActive ? tab.iconOn : tab.icon} />
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