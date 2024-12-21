import './style.css'
import React from 'react'

export const metadata = {
    title: "PHOTO BOOK",
    description: "コーディング課題を作って、アップロードする場所。",
    icons: {
        icon: {
            url: '/favicons/kadai2.ico',
            href: '/favicons/kadai2.ico'
        }
    },
};

const layout = ({ children }) => {
    return (
        <>{children}</>
    )
}

export default layout;