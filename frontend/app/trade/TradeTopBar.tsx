import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { RiArrowDropDownLine } from "react-icons/ri";
import { Ticker } from '../utils/types';
import { getTicker } from '../utils/httpClient';

const TradeTopBar = ({ market }: { market: string }) => {

    const [ticker, setTicker] = useState<Ticker | null>(null);

    useEffect(() => {
        getTicker(market).then(setTicker);
    }, [market])
    return (
        <div className='flex flex-col md:flex-row items-center p-2 gap-3 border-b border-zinc-800 h-14'>
            {/* Keep this div aligned properly in both small and larger screens
            <div className='flex gap-2 bg-zinc-700 bg-opacity-70 px-2 py-0 rounded-full justify-center items-center'>
                <div className='flex h-6 w-6 items-center justify-center rounded-full bg-black overflow-hidden p-1'>
                    <Image
                        src={"/solana-sol-icon.svg"}
                        alt='currency icon'
                        width={14}
                        height={14}
                    />
                </div>
                <div className='flex justify-center items-center text-mdd font-semibold text-white p-0.5 tracking-wider'>SOL/USDC</div>
                <RiArrowDropDownLine className='text-slate-400' />
            </div> */}
            <Ticker market={market} />
            {/* Horizontal scrolling behavior for small screens */}
            <div className='flex flex-1 justify-start items-center gap-4 overflow-x-auto md:overflow-visible'>
                <div className='flex items-center flex-col'>
                    <div className='text-red-500 font-semibold text-lg tracking-widest'>
                        ${ticker?.lastPrice}
                    </div>
                    <div className='text-white font-medium tracking-wider'>
                        ${ticker?.lastPrice}
                    </div>
                </div>
                <div className='flex items-center justify-center flex-col'>
                    <div className='text-sm text-slate-400'>
                        24H Change
                    </div>
                    <div className={`font-normal ${Number(ticker?.priceChange) > 0 ? "text-green-500" : "text-red-500"}`}>
                        {Number(ticker?.priceChange) > 0 ? "+" : ""} {Number(ticker?.priceChangePercent)?.toFixed(2)}%
                    </div>
                </div>
                <div className='flex items-center justify-center flex-col'>
                    <div className='text-sm text-slate-400'>
                        24H High
                    </div>
                    <div className='text-white font-normal '>
                        {ticker?.high}
                    </div>
                </div>
                <div className='flex items-center justify-center flex-col'>
                    <div className='text-sm text-slate-400'>
                        24H Low
                    </div>
                    <div className='text-white font-normal '>
                        {ticker?.low}
                    </div>
                </div>
                <div className='flex items-center justify-center flex-col'>
                    <div className='text-sm text-slate-400'>
                        24H Volume USDC
                    </div>
                    <div className='text-white font-normal '>
                        {ticker?.volume}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TradeTopBar;

function Ticker({ market }: { market: string }) {
    return <div className="flex h-[60px] shrink-0 space-x-4  text-white">
        <div className="flex flex-row relative ml-2 -mr-4">
            <img alt="SOL Logo" loading="lazy" decoding="async" data-nimg="1" className="z-10 rounded-full h-6 w-6 mt-4 outline-baseBackgroundL1" src="/sol.webp" />
            <img alt="USDC Logo" loading="lazy" decoding="async" data-nimg="1" className="h-6 w-6 -ml-2 mt-4 rounded-full" src="/usd.svg" />
        </div>
        <button type="button" className="react-aria-Button" data-rac="">
            <div className="flex items-center justify-between flex-row cursor-pointer rounded-lg p-3 hover:opacity-80">
                <div className="flex items-center flex-row gap-2 undefined">
                    <div className="flex flex-row relative">
                        <p className="font-medium text-sm undefined">{market.replace("_", " / ")}</p>
                    </div>
                </div>
            </div>
        </button>
    </div>
}
