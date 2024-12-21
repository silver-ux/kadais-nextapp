import Image from 'next/image'
import React from 'react'
import mv from 'public/img2/mainvisual.jpg';

export const Main = () => {
    return (
        <div className='px-2.5 lg:px-0'>
            <Image
                src={mv}
                alt='mainvisual'
                style={{ width: '100%', height: '100%' }}
            />
        </div>
    )
}
