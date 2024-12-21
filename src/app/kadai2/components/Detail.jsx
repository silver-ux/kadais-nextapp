import React from 'react'
import { Title } from './Title'
import Image from 'next/image'
import detailimg from 'public/img2/detail.jpg';
import Link from 'next/link';

export const Detail = () => {
    return (
        <div className='container-layout mt-[65px] mb-[100px] px-10 lg:px-0'>
            <Title>Detail</Title>
            <div className='mt-2.5 lg:flex lg:h-[270px]'>
                <Image
                    src={detailimg}
                    height={270}
                    width={270}
                    alt='image'
                    className='lg:mr-[60px] w-full'
                    style={{ height: 'auto' }}
                />
                <div className='pt-7 lg:pt-0'>
                    <Title>タイトルタイトルタイトル</Title>
                    <dl className='flex flex-wrap py-4 mt-[20px] mb-[25px]'>
                        <dt>著者</dt>
                        <dd>タイトルタイトルタイトル</dd>
                        <dt>出版社</dt>
                        <dd>タイトルタイトルタイトル</dd>
                        <dt>発行年</dt>
                        <dd>タイトルタイトルタイトル</dd>
                    </dl>
                    <p className='text-[14px] mb-[20px]'>テキストテキストテキストテキストテキス トテキスト テキストテキストテキストテ キストテキストテキスト</p>
                    <Link href="https://www.youtube.com/" className='underline' rel="noopener noreferrer" target="_blank">オンラインストアで見る</Link>
                </div>
            </div>
        </div>
    )
}
