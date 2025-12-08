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
    colors?: {
        backgroundColor?: string;
        lineColor?: string;
        textColor?: string;
        areaTopColor?: string;
        areaBottomColor?: string;
    };
}

const CoinChart: React.FC<CoinChartProps> = ({
    ohlcData,
    colors: {
        backgroundColor = 'white',
        lineColor = '#2962FF',
        textColor = 'black',
        areaTopColor = '#2962FF',
        areaBottomColor = 'rgba(41, 98, 255, 0.28)',
    } = {},
}) => {
    const chartContainerRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        if (!chartContainerRef.current || ohlcData.length === 0) return;

        const chart = createChart(chartContainerRef.current, {
            width: chartContainerRef.current.clientWidth,
            height: 400,
            layout: {
                background: {
                    type: ColorType.Solid,
                    color: backgroundColor
                },
                textColor,
                fontFamily: 'Courier New, Arial, Times New Roman',
                fontSize: 12,
            },
            grid: {
                vertLines: { color: '#eee' },
                horzLines: { color: '#eee' },
            },
            rightPriceScale: {
                borderVisible: false,
            },
            timeScale: {
                borderVisible: false,
                rightOffset: 5,
                barSpacing: 15,
                fixLeftEdge: true,
                lockVisibleTimeRangeOnResize: false
            }
        })

        const sortedData = [...ohlcData]
            .slice()
            .sort((a, b) => new Date(a.time).getTime() - new Date(b.time).getTime());

        const newSeries = chart.addSeries(CandlestickSeries, {
            upColor: "#26a69a",
            downColor: "#ef5350",
            borderVisible: false,
            wickUpColor: "#26a69a",
            wickDownColor: "#ef5350"
        })
        newSeries.setData(sortedData);

        chart.timeScale().fitContent();

        const handleResize = () => {
            chart.applyOptions({ width: chartContainerRef.current!.clientWidth });
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            chart.remove();
        }
    }, [ohlcData, backgroundColor, lineColor, textColor, areaTopColor, areaBottomColor])

    return <div ref={chartContainerRef} style={{ width: '100%', height: 400 }} />;
}

export default CoinChart