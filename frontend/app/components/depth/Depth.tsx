"use client"
import React from 'react';

import { useEffect, useState } from 'react';
import { getDepth, getKlines, getTicker, getTrades } from "../../utils/httpClient"
import { AskTable } from './AskTable';
import { BidTable } from './BidTable';

export function Depth({ market }: { market: string }) {

    const [bids, setBids] = useState<[string, string][]>();
    const [asks, setAsks] = useState<[string, string][]>();
    const [price, setPrice] = useState<string>();

    useEffect(() => {
        getDepth(market).then(d => {
            setBids(d.bids.reverse());
            setAsks(d.asks);
        })
        getTicker(market).then(t => setPrice(t.lastPrice))
    }, [])

    return (
        <div className=' md:border-zinc-800 text-white p-2 '>
            <TableHeader />
            {asks && <AskTable asks={asks} />}
            {price && <div className='font-semibold'>{price}</div>}
            {bids && <BidTable bids={bids} />}
        </div>
    )
}

function TableHeader() {
    return (
        <div className='flex justify-between gap-2 text-xs'>
            <div className=' text-white'>Price</div>
            <div className=' text-white'>Size</div>
            <div className=' text-white'>Total</div>
        </div>
    )
}


