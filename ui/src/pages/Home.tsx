import React from 'react'
import { useNavigate } from 'react-router';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import Slide01 from "../assets/img/slide/slide_bg_01.jpg"
import Slide02 from "../assets/img/slide/slide_bg_02.jpg"

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

    const images = [
        { id: 1, src: Slide01, alt: "" },
        { id: 2, src: Slide02, alt: "" },
        { id: 3, src: Slide01, alt: "" },
    ];
    
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
            <div className="slider__container">
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={50}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                >
                    {images.map((image) => (
                        <SwiperSlide key={image.id}>
                            <img src={image.src} alt={image.alt} />
                        </SwiperSlide>
                    ))}
                </Swiper>
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