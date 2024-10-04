"use client"
import React from 'react';
import TradeTopBar from '../TradeTopBar';
import SwapUi from '../SwapUi';
import TradeView from '../TradeView';
import { Depth } from '../../components/depth/Depth';
import { useParams } from 'next/navigation';

const Trade: React.FC = () => {
    const { market } = useParams();

    return (
        <div className='flex flex-col md:flex-row h-full w-full'>

            <div className='flex flex-col flex-wrap md:flex-row w-full'>
                <div className='md:flex-1 flex flex-col'>
                    <TradeTopBar market={market as string} />
                    <div className=' flex flex-col md:flex-row md:justify-between md:border-b md:border-zinc-800'>

                        <div className='flex items-center justify-centerflex-grow flex-shrink-0 md:flex-grow '>
                            <TradeView market={market as string} />
                        </div>

                        <div className='md:w-2/5 md:max-w-sm min-w-sm p-1 md:border-l md:border-zinc-800'>
                            <div className='flex gap-5 text-sm text-slate-400 font-semibold'>
                                <div>
                                    Book
                                </div>
                                <div>
                                    Trades
                                </div>
                            </div>
                            <Depth market={market as string} />
                        </div>
                    </div>
                </div>
                <SwapUi />
            </div>
        </div>
    );
};

export default Trade;