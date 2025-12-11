import React from 'react'
import { useParams } from 'react-router';
import CoinChart from "../../components/CoinChart"
import Button from '../../components/Button';

interface OHLC {
    time: string;
    open: number;
    high: number;
    low: number;
    close: number;
}

export function formatToSIPrefix(num: number): string {
    const abs = Math.abs(num);

    const format = (value: number, unit: string) =>
        parseFloat(value.toFixed(value < 10 ? 2 : value < 100 ? 1 : 0)) + unit;

    if (abs >= 1e12) return format(num / 1e12, "T");
    if (abs >= 1e9)  return format(num / 1e9, "B");
    if (abs >= 1e6)  return format(num / 1e6, "M");
    if (abs >= 1e3)  return format(num / 1e3, "K");

    return num.toString();
}


const Index = () => {
    const { id } = useParams<{ id: string }>();
    const [coin, setCoin] = React.useState<any>(null);
    const [ohlcData, setOhlcData] = React.useState<OHLC[]>([]);

    React.useEffect(() => {
        const fetchCoin = async () => {
            const res = await fetch(`https://api.coinlore.net/api/ticker/?id=${id}`);
            const data = await res.json();
            setCoin(data[0]);

            const today = new Date();
            const mockOHLC: OHLC[] = [];

            let prevClose = parseFloat(data[0].price_usd);

            for (let i = 50; i > 0; i--) {
                const date = new Date(today);
                date.setDate(today.getDate() - i);

                const open = prevClose + (Math.random() - 0.5) * 5;
                const close = open + (Math.random() - 0.5) * 5;
                const high = Math.max(open, close) + Math.random() * 2;
                const low = Math.min(open, close) - Math.random() * 2;

                mockOHLC.push({
                    time: date.toISOString().split('T')[0], // YYYY-MM-DD
                    open: parseFloat(open.toFixed(2)),
                    high: parseFloat(high.toFixed(2)),
                    low: parseFloat(low.toFixed(2)),
                    close: parseFloat(close.toFixed(2)),
                });

                prevClose = close;
            }
            setOhlcData(mockOHLC);
        };
        fetchCoin();
    }, [id]);

    if (!coin || ohlcData.length === 0) return <div>Loading...</div>;

    const last = ohlcData[ohlcData.length - 1];
    const avgVolume = coin.volume24 ? coin.volume24 / 24 : 0;

    return (
        <>
            <div className="stockPanel__container">
                <div className="stock__detail__container">
                    <div className="stock__detail__price">
                        <h4>
                            ${parseInt(coin.price_usd).toFixed(2).split(".")[0]}
                            <small>.{parseFloat(coin.price_usd).toFixed(2).split('.')[1]}</small>
                        </h4>
                        <p>
                            ${coin.price_usd}
                            <span>{coin.percent_change_24h}%</span>
                        </p>
                    </div>
                </div>
                <div className="stock__trading__container">
                    <CoinChart ohlcData={ohlcData} />
                </div>
                <div className="stock__statistics__container">
                    <div className="stock__statistics__title">
                        <h4>Statistics</h4>
                    </div>
                    <div className="stock__statistics__content">
                        <div className="stock__statistics__item">
                            <h4>Open</h4>
                            <p>{last.open}</p>
                        </div>
                        <div className="stock__statistics__item">
                            <h4>High</h4>
                            <p>{last.high}</p>
                        </div>
                        <div className="stock__statistics__item">
                            <h4>Low</h4>
                            <p>{last.low}</p>
                        </div>
                        <div className="stock__statistics__item">
                            <h4>Volume</h4>
                            <p>{formatToSIPrefix(coin.volume24)}</p>
                        </div>
                        <div className="stock__statistics__item">
                            <h4>Avg. Volume</h4>
                            <p>{formatToSIPrefix(avgVolume)}</p>
                        </div>
                        <div className="stock__statistics__item">
                            <h4>Market Cap</h4>
                            <p>${formatToSIPrefix(coin.market_cap_usd)}</p>
                        </div>
                    </div>
                </div>
                <div className="stock__button__container">
                    <Button type="submit" color="danger">Buy</Button>
                    <Button type="submit" color="primary">Sell</Button>
                </div>
            </div>
        </>
    )
}

export default Index