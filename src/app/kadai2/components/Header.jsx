import Image from 'next/image'
import React from 'react'
import logo from 'public/img2/logo.svg'

export const Header = () => {
    return (
        <header className='h-[93px] flex items-end px-2.5 lg:px-0'>
            <h1 className='w-[160px] mb-[15px]'>
                <Image
                    src={logo}
                    alt='logo'
                    style={{ width: '100%', height: '100%' }}
                />
            </h1>
        </header>
    )
}
