"use client"

import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { PrimaryButton, SuccessButton } from '../ui/Button';

const Appbar: React.FC = () => {

    const route = usePathname();
    const router = useRouter();

    const getLinkClass = (path: string) => {
        return route.startsWith(path);
    };

    return (
        <div className='flex  justify-between items-center p-2 border-b border-zinc-800'>
            <div className='flex gap-8'>
                <div className='text-2xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-b from-blue-950 to-blue-500 bg-clip-text text-transparent'>
                    TradeEx
                </div>
                <div className='flex gap-5  mt-1.5 md:mt-4 lg:mt-5 text-slate-500  lg:text-lg tracking-tighter font-medium'>
                    <div
                        className={`${route.startsWith('/markets') ? 'text-white glow-text' : 'text-slate-500 hover:text-white'}`}
                        onClick={() => router.push('/markets')}
                    >
                        Markets
                    </div>
                    <div
                        className={`${route.startsWith('/trade') ? 'text-white glow-text' : 'text-slate-500 hover:text-white'}`}
                        onClick={() => router.push('/trade')}
                    >
                        Trade
                    </div>
                </div>
            </div>
            <div>
                <SuccessButton>Deposit</SuccessButton>
                <PrimaryButton>Withdraw</PrimaryButton>
            </div>
        </div >
    )
}
export default Appbar;