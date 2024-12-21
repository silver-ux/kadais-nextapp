import Link from 'next/link'
import React from 'react'
import { ToTopBtn } from 'src/app/components/ToTopBtn'

export const Footer = () => {
    return (
        <footer className='container-layout py-5'>
            <ToTopBtn />
            <p className='pt-8'><small>&copy; 2020 PHOTO BOOK</small></p>
        </footer >
    )
}
