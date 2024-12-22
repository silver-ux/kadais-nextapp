'use client';
import Image from 'next/image'
import React from 'react'
import mv from 'public/img2/mainvisual.jpg';
import { motion } from 'motion/react';

export const Main = () => {
    return (
        <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}

            className='px-2.5 lg:px-0'>
            <Image
                src={mv}
                alt='mainvisual'
                style={{ width: '100%', height: '100%' }}
            />
        </motion.div>
    )
}
