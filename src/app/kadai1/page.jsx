import React from 'react'
import { Header } from '../components/kadai1/section/Header';
import { Main } from '../components/kadai1/section/Main';
import { About } from '../components/kadai1/section/About';
import { Bicycle } from '../components/kadai1/section/Bicycle';
import './global.css'
import { Footer } from '../components/kadai1/section/Footer';

export const metadata = {
    title: "Profile Site.",
    description: "コーディング課題を作って、アップロードする場所。",
};

const kadai1 = () => {
    return (
        <div className='font-[Meiryo]'>
            <Header />
            <Main />
            <About />
            <Bicycle />
            <Footer />
        </div >
    )
}

export default kadai1
