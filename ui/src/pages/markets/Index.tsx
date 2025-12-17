import React from 'react'
import Button from '../../components/Button';

import { useNavigate } from "react-router";

interface Coin {
    name: string;
    symbol: string;
    price_usd: string;
    percent_change_24h: string;
    market_cap_usd: string;
}

const Index = () => {
    const [coins, setCoins] = React.useState<Coin[]>([]);
    const [loading, setLoading] = React.useState(true);
    const navigate = useNavigate();

    const fetchCoins = async (isInitial = false) => {
        try {
            if (isInitial) setLoading(true);
            const res = await fetch(`https://api.coinlore.net/api/tickers/?start=0&limit=20`);
            const data = await res.json()
            setCoins(data.data)
        } catch (err) {
            console.error(err)
        } finally {
            if (isInitial) setLoading(false)
        }
    }
        
    React.useEffect(() => {
        fetchCoins(true)
        const interval = setInterval(() => {
            fetchCoins(false);
        }, 5000);
        return () => clearInterval(interval);
    }, [])
    return (
        <>
            <div className="coin__activity__container">
                <div className="coin__box__container">
                    <h4>Balance</h4>
                    <div className="coin__box__price">
                        <h5>$15,320.45</h5>
                        <p>+$0.36 <span>(+2.34%)</span></p>
                    </div>
                </div>
                <div className="coin__button__container">
                    <Button type="button" onClick={() => navigate("/deposit")} color="secondary">Deposit</Button>
                    <Button type="button" onClick={() => navigate("/withdraw")} color="secondary">Withdraw</Button>
                </div>
            </div>
            <div className="coin__list__container">
                <div className="coin__list__container__title">
                    <h4>Assets</h4>
                </div>
                <div className="coin__list__container__items">
                    {loading ? (
                        Array.from({ length: 6 }).map((_, index) => (
                            <div key={index} className="coin__list__container__item loading">
                                <div className="coin__list__container__item__icon">
                                    <div className="coin__icon">
                                        <div></div>
                                    </div>
                                    <div className="coin__name">
                                        <h4></h4>
                                        <p></p>
                                    </div>
                                </div>
                                <div className="coin__list__container__item__price">
                                    <h4></h4>
                                    <p></p>
                                </div>
                            </div>
                        ))
                    ) : (
                        coins.map((coin, index) => {
                            const percent = Number(coin.percent_change_24h);
                            return (
                                <div className="coin__list__container__item" key={index}>
                                    <div className="coin__list__container__item__icon">
                                        <div className="coin__icon">
                                            <img
                                                src={`https://img.logokit.com/crypto/${coin.symbol}?token=pk_fr3303abf845f15ae9f02e`}
                                                alt={coin.name}
                                            />
                                        </div>
                                        <div className="coin__name">
                                            <h4>{coin.name}</h4>
                                            <p>${coin.price_usd}</p>
                                        </div>
                                    </div>

                                    <div className="coin__list__container__item__price">
                                        <h4>${coin.market_cap_usd}</h4>
                                        <span className={percent >= 0 ? "up" : "down"}>
                                            {percent > 0 ? `+${percent}%` : `${percent}%`}
                                        </span>
                                    </div>
                                </div>
                            );
                        })
                    )}
                </div> 
            </div>
        </>
    )
}

export default Index