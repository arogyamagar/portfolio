import React from 'react'
import {header,exLink,grid1,mails,anchor1,resume,img,info} from '../styles/home.module.css'
import 'boxicons';
import { StaticImage } from 'gatsby-plugin-image';

export default function About() {
    return (
        <>
        <section className={header}>
                <StaticImage src="../images/img.jpg" alt="profile" className={img}/>
            <div className={grid1}>
                <h1>Arogya Thapa Magar</h1><br/>
                <div className={mails}>
                    <box-icon name='mail-send' size='md' color='#bbb'></box-icon><a href="mailto:itsarogyamagar@gmail.com" className={exLink} style={{fontSize:"24px"}}>itsarogyamagar@gmail.com</a><br/>
                </div>
                <div className={anchor1}>
                    <a href="https://github.com/arogyamagar/" target="_blank" rel="noreferrer" ><box-icon type='logo' name='github' size='md'></box-icon></a>
                    <a href="https://www.linkedin.com/in/arogyamagar/" target="_blank" rel="noreferrer"><box-icon name='linkedin' type='logo' size='md'></box-icon></a>
                </div>
            </div>             
        </section>
        <div className={info}>
            <p>Hello! I’m Arogya Thapa Magar, frontend developer from Lalitpur Nepal.</p>
            <p>Currently I am working with HTML, CSS and React.js.</p>
            <p>I'm currently pursuing Bachelor Degree in CSIT at <a href="https://tribhuvan-university.edu.np/" target="_blank" className={exLink}  rel="noreferrer">Tribhuvan University</a></p>
        </div> 
        <div className={resume}>
            <a href="https://drive.google.com/file/d/1MU7QhZf1AiIkYBlIobfwwAd9TAOEjg0i/view?usp=sharing" target="_blank" rel="noreferrer">View Resume</a>
        </div> 
        </>
    )
}
