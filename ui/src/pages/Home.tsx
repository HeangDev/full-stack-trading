import React from 'react'
import { useNavigate } from 'react-router';

interface Coin {
    id: number;
    name: string;
    symbol: string;
    price_usd: number;
    percent_change_24h: number;
}

const Home = () => {
    const [coins, setCoins] = React.useState<Coin[]>([]);
    const navigate = useNavigate();
    
    const fetchCoins = async () => {
        const res = await fetch(`https://api.coinlore.net/api/tickers/?start=0&limit=10`);
        const data = await res.json()
        setCoins(data.data)
        //console.log(data)
    }
        
    React.useEffect(() => {
        fetchCoins()
        const interval = setInterval(() => {
            fetchCoins();
        }, 5000);
        return () => clearInterval(interval);
    }, [])
    return (
        <>
            <div className="profilePanel__container">
                <div className="profilePanel__content">
                    <div className="profilePanel__img">
                        <img src="https://mockmind-api.uifaces.co/content/human/218.jpg" alt=""/>
                    </div>
                    <div className="profilePanel__name">
                        <h4>Hi, John Doe!</h4>
                        <p>Welcome to Tradebase</p>
                    </div>
                </div>
            </div>
            <div className="slider__container">

            </div>
            <div className="coin__list__container">
                <div className="coin__list__container__title">
                    <h4>Top Coins</h4>
                </div>
                <div className="coin__list__container__items">
                    {coins.map((coin, index) => (
                        <div onClick={() => navigate(`/stock/${coin.id}`)} className="coin__list__container__item" key={index}>
                            <div className="coin__list__container__item__icon">
                                <div className="coin__icon">
                                    <img src={`https://img.logokit.com/crypto/${coin.symbol}?token=pk_fr3303abf845f15ae9f02e`} alt=""/>
                                </div>
                                <div className="coin__name">
                                    <h4>{coin.name}</h4>
                                    <p>{coin.symbol}</p>
                                </div>
                            </div> 
                            <div className="coin__list__container__item__price">
                                <h4>${coin.price_usd}</h4>
                                {(() => {
                                    const percent = coin.percent_change_24h;
                                    return (
                                        <span className={percent >= 0 ? "up" : "down"}>
                                            {percent > 0 ? `+${percent}%` : `${percent}%`}
                                        </span>
                                    );
                                })()}
                            </div>
                        </div>
                    ))}
                </div> 
            </div>
        </>
    )
}

export default Home