import React from 'react'
import { Header } from './components/Header';
import { Main } from './components/Main';
import { TextArea } from './components/TextArea';
import { Detail } from './components/Detail';
import { Footer } from './components/Footer';

// ブレークポイントlg(1024px)
const page = () => {
    return (
        <div className='max-w-[1000px] mx-auto font-[Meiryo]'>
            <Header />
            <Main />
            <TextArea />
            <Detail />
            <Footer />
        </div>
    )
}

export default page;