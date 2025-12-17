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
        }, 1000);
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
                
            </div>
        </>
    )
}

export default Home