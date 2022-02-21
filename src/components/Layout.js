import React from 'react'
import Navbar from './Navbar'
import '../styles/global.css'

export default function Layout({children}) {
    return (
        <div className="layout">
            <Navbar />
            <div className="content">
                {children}
            </div>
            <footer>
                <p>&copy; ArogyaMagar 2022, Built with <a href="https://www.gatsbyjs.com/" target="_blank" rel="noreferrer">Gatsby</a></p>
            </footer>
            <div className="bot"></div>
        </div>
    )
}
