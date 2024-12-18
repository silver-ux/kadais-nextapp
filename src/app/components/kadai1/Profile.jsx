import Image from 'next/image'
import React from 'react'
import image from 'public/kadai1img/about.jpg'

export const Profile = () => {
    return (
        <div className='sm:flex-row place-content-center container-layout mt-[70px] flex items-center flex-col'>
            <Image
                src={image}
                width={100}
                height={100}
                style={{ borderRadius: '50%' }}
                alt='Profile image'
            />
            <div className='w-full sm:w-[48%] ml-[30px]'>
                <h3 className='font-bold'>KAKERU MIYAICHI</h3>
                <p className='pt-2.5 text-[14.4px]'>テキストテキストテキストテキストテキストテキストテキスト<br />テキストテキストテキストテキストテキストテキストテキスト<br />テキストテキストテキストテキストテキストテキストテキスト</p>
            </div>
        </div>
    )
}
