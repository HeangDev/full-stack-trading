import React from 'react'
import { useParams } from 'react-router';
import CoinChart from "../../components/CoinChart"

interface OHLC {
    time: string;
    open: number;
    high: number;
    low: number;
    close: number;
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

    return (
        <>
            <CoinChart ohlcData={ohlcData} />
        </>
    )
}

export default Index