import React from 'react'
import { Header } from './components/kadai1/section/Header';
import { Main } from './components/kadai1/section/Main';
import { About } from './components/kadai1/section/About';
import { Bicycle } from './components/kadai1/section/Bicycle';
import { Footer } from './components/kadai1/section/Footer';

const kadai1 = () => {
    return (
        <div className='font-[Meiryo]'>
            <Header />
            <Main />
            <About />
            <Bicycle />
            <Footer />
        </div>
    )
}

export default kadai1;
