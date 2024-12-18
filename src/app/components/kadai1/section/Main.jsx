import Image from 'next/image'
import React from 'react'
import mv from 'public/kadai1img/mainvisual.jpg'

export const Main = () => {
    return (
        <div>
            <Image
                src={mv}
                alt='mainvisual'
                width={1920}
                height={1280}
                style={{ width: '100%', height: '600px', objectFit: 'cover' }}
                priority={true}
            />
        </div>
    )
}
