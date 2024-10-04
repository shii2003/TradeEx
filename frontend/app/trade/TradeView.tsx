import React, { useEffect, useRef } from 'react';
import { ChartManager } from '../utils/ChartManager';
import { KLine } from '../utils/types';
import { getKlines } from '../utils/httpClient';

export default function Tradeview({ market, }: { market: string }) {

    const chartRef = useRef<HTMLDivElement>(null);
    const chartManagerRef = useRef<ChartManager>(null);


    const init = async () => {
        let klineData: KLine[] = [];
        try {
            klineData = await getKlines(market, "1h", Math.floor((new Date().getTime() - 1000 * 60 * 60 * 24 * 7) / 1000), Math.floor(new Date().getTime() / 1000));
            console.log("kline data:", klineData)

        } catch (e) { }

        if (chartRef) {
            if (chartManagerRef.current) {
                chartManagerRef.current.destroy();
            }
            const chartManager = new ChartManager(
                chartRef.current,
                [
                    ...klineData?.map((x) => ({
                        close: parseFloat(x.close),
                        high: parseFloat(x.high),
                        low: parseFloat(x.low),
                        open: parseFloat(x.open),
                        timestamp: new Date(x.end),
                    })),
                ].sort((x, y) => (x.timestamp < y.timestamp ? -1 : 1)) || [],
                {
                    background: "#0e0f14",
                    color: "white",
                }
            );
            //@ts-ignore
            chartManagerRef.current = chartManager;
        }
    };

    useEffect(() => {
        init();
    }, [market, chartRef]);


    return (
        <div ref={chartRef} className='flex-grow  flex items-center justify-centertext-white h-[300px] sm:h-[500px] w-[300px] '
        ></div>

    )
}
