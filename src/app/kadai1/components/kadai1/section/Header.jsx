import Image from 'next/image'
import React from 'react'
import logo from 'public/kadai1img/logo.svg'
import Link from 'next/link'

export const Header = () => {
    return (
        <header className='h-[60px]'>
            <div className="container-layout flex justify-between items-center h-full">
                <h1>
                    <Image
                        src={logo}
                        alt='logo icon'
                        width={120}
                        height={40}
                        priority={true}
                    />
                </h1>
                <nav>
                    <ul className='flex text-sm'>
                        <li className='hover:underline hover:transition-all decoration-2'>
                            <Link href={`/kadai1/#about`}>
                                About
                            </Link>
                        </li>
                        <li className='ml-[30px] hover:underline hover:transition-all decoration-2'>
                            <Link href={`/kadai1/#bicycle`}>
                                Bicycle
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
