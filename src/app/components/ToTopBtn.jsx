import Link from 'next/link'
import React from 'react'

export const ToTopBtn = () => {
    return (
        <button className='block m-auto text-3xl font-bold text-slate-100 bg-slate-600 rounded-xl py-3 px-6 hover:bg-slate-800 transition-all hover:scale-105 active:scale-95'>
            <Link href={"/"}>To HomePage</Link>
        </button>
    )
}
