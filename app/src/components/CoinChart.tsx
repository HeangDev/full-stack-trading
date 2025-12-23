import React from 'react'
import { CandlestickSeries, createChart, ColorType } from 'lightweight-charts';

interface CoinChartProps {
    ohlcData: {
        time: string;
        open: number;
        high: number;
        low: number;
        close: number;
    }[];
}

const CoinChart: React.FC<CoinChartProps> = ({ ohlcData }) => {
    const chartContainerRef = React.useRef<HTMLDivElement>(null);

    const currentLocale = window.navigator.languages[0];
    const myPriceFormatter = Intl.NumberFormat(currentLocale, {
        style: 'currency',
        currency: 'USD',
    }).format;

    React.useEffect(() => {
        if (!chartContainerRef.current || ohlcData.length === 0) return;

        const chart = createChart(chartContainerRef.current, {
            width: chartContainerRef.current.clientWidth,
            height: 400,
            layout: {
                background: {
                    type: ColorType.Solid,
                    color: "white"
                },
                textColor: "#6C727F",
                fontFamily: '"ABeeZee", sans-serif',
                fontSize: 12,
            },
            grid: {
                vertLines: {
                    visible: false
                },
                horzLines: {
                    visible: false
                }
            },
            rightPriceScale: {
                visible: false,
                borderVisible: false,
            },
            leftPriceScale: {
                visible: true,
                borderVisible: false,
            },
            timeScale: {
                borderVisible: false,
                rightOffset: 5,
                barSpacing: 15,
                fixLeftEdge: true,
                lockVisibleTimeRangeOnResize: false
            },
            localization: {
                priceFormatter: myPriceFormatter
            }
        })

        const sortedData = [...ohlcData]
            .slice()
            .sort((a, b) => new Date(a.time).getTime() - new Date(b.time).getTime());

        const series = chart.addSeries(CandlestickSeries, {
            upColor: "#3500D4",
            downColor: "#F61C7A",
            borderVisible: false,
            wickUpColor: "#3500D4",
            wickDownColor: "#F61C7A"
        })
        
        series.setData(sortedData);

        series.priceScale().applyOptions({
            autoScale: false,
            scaleMargins: {
                top: 0.1,
                bottom: 0.2,
            },
        })

        chart.timeScale().applyOptions({
            borderColor: '#71649C',
            barSpacing: 10,
        })
        return () => chart.remove();

    }, [ohlcData])

    return <div ref={chartContainerRef} style={{ width: '100%', height: 400 }} />;
}

export default CoinChart