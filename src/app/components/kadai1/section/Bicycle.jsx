import React from 'react'
import { Title } from '../Title'
import Link from 'next/link'
import Image from 'next/image'
import img1 from 'public/kadai1img/bicycle1.jpg'
import img2 from 'public/kadai1img/bicycle2.jpg'
import img3 from 'public/kadai1img/bicycle3.jpg'


export const Bicycle = () => {

    const bicycles = [{
        id: "1",
        image: img1,
        title: "タイトルタイトル",
        text: "テキストテキストテキスト",
    }, {
        id: "2",
        image: img2,
        title: "タイトルタイトル",
        text: "テキストテキストテキスト",
    }, {
        id: "3",
        image: img3,
        title: "タイトルタイトル",
        text: "テキストテキストテキスト",
    }]

    return (
        <div className='pt-[100px]' id='bicycle'>
            <Title>Bicycle</Title>
            <div className='container-layout flex flex-col sm:flex-row justify-between pt-[60px] pb-24 text-center'>
                {bicycles.map((bicycle) => (
                    <Link key={bicycle.id} href="https://www.youtube.com/" className='group block' rel="noopener noreferrer" target="_blank">
                        <div className='sm:w-[262.8px] w-full sm:h-[174px] overflow-hidden rounded-xl'>
                            <Image
                                src={bicycle.image}
                                alt='bicycle image'
                                width={640}
                                height={424}
                                style={{ width: "100%", height: "100%" }}
                                className='group-hover:scale-110 transition-all '
                            />
                        </div>
                        <h3 className='font-bold my-2.5'>{bicycle.title}</h3>
                        <p className='text-[14.4px] mb-8'>{bicycle.text}</p>
                    </Link>
                ))}
            </div>
            <button className='block m-auto text-3xl font-bold text-slate-100 bg-slate-600 rounded-xl py-3 px-6 hover:bg-slate-800 transition-all hover:scale-105 active:scale-95'>
                <Link href={"/"}>To HomePage</Link>
            </button>
        </div>
    )
}