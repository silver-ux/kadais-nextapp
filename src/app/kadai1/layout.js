import './style.css'
import React from 'react'

export const metadata = {
    title: "Profile Site.",
    description: "コーディング課題を作って、アップロードする場所。",
    icons: {
        icon: {
            url: '/favicons/kadai1.ico',
            href: '/favicons/kadai1.ico'
        }
    },
};

const layout = ({ children }) => {
    return (
        <>{children}</>
    )
}

export default layout;