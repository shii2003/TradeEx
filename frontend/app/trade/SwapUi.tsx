import React from 'react';

const SwapUi: React.FC = () => {

    return (
        <div className='flex flex-col w-full md:min-w-[250px] md:max-w-[320px] mx-auto md:border-l md:border-zinc-800'>
            <div className='h-14 border-b border-zinc-800 flex'>
                {/* Buy and Sell buttons - ensure equal width and no shrinking */}
                <div className='flex items-center justify-center bg-opacity-15 bg-green-500 text-green-500 font-semibold border-b-2 border-green-500 w-1/2'>
                    Buy
                </div>
                <div className='flex items-center justify-center bg-opacity-40 text-red-500 font-semibold w-1/2'>
                    Sell
                </div>
            </div>

            <div className='flex flex-col text-white pb-4 pl-4 pr-4 pt-1'>
                <div className='flex'>
                    <div className='border-b-2 border-blue-500 p-2 font-medium tracking-tighter w-1/2'>
                        Limit
                    </div>
                    <div className='p-2 text-slate-400 font-medium tracking-tighter w-1/2'>
                        Market
                    </div>
                </div>

                {/* Available Balance */}
                <div className='flex justify-between items-center mt-2'>
                    <span className='text-sm tracking-tighter text-slate-400'> Available Balance</span>
                    <span> 0.00 USDC</span>
                </div>

                {/* Input for Price */}
                <div className='mb-4'>
                    <label htmlFor="price-input" className='block mb-0.5 text-sm text-slate-400'>
                        Price
                    </label>
                    <input
                        type="text"
                        id="price-input"
                        className='bg-zinc-900 border-2 border-zinc-700 text-white text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none block w-full p-2.5 placeholder-gray-400'
                    />
                </div>

                {/* Input for Quantity */}
                <div className='mb-4'>
                    <label htmlFor="quantity-input" className='block mb-0.5 text-sm text-slate-400'>
                        Quantity
                    </label>
                    <input
                        type="text"
                        id="quantity-input"
                        className='bg-zinc-900 border-2 border-zinc-700 text-white text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none block w-full p-2.5 placeholder-gray-400'
                    />
                </div>

                {/* Percentage Buttons */}
                <div className='flex text-sm tracking-tight justify-between gap-x-4 mb-4 max-w-sm'>
                    <div className='flex px-3 py-1 rounded-full bg-zinc-700 w-1/4 max-w-[60px] justify-center'>25%</div>
                    <div className='flex px-3 py-1 rounded-full bg-zinc-700 w-1/4 max-w-[60px] justify-center'>50%</div>
                    <div className='flex px-3 py-1 rounded-full bg-zinc-700 w-1/4 max-w-[60px] justify-center'>75%</div>
                    <div className='flex px-3 py-1 rounded-full bg-zinc-700 w-1/4 max-w-[60px] justify-center'>Max</div>
                </div>

                {/* Input for Order Value */}
                <div className='mb-4'>
                    <label htmlFor="order-value-input" className='block mb-0.5 text-sm text-slate-400'>
                        Order Value
                    </label>
                    <input
                        type="text"
                        id="order-value-input"
                        className='bg-zinc-900 border-2 border-zinc-700 text-white text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none block w-full p-2.5 placeholder-gray-400'
                    />
                </div>

                {/* Sign Up Button */}
                <div className='flex items-center justify-between'>
                    <button className='w-full rounded-md bg-white text-zinc-900 p-2'>
                        Sign up to trade
                    </button>
                </div>
            </div>
        </div>
    )
}
export default SwapUi;