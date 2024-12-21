import React from 'react'
import './style.css'

export const metadata = {
    title: "Recipe",
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