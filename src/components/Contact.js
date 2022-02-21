import React from 'react'
import {contact,item} from '../styles/contact.module.css'

export default function Contact() {
    return (
        <div className={contact}>
                <h1>Hello Drop A Message</h1>
                <form 
                name="contact"
                method="post"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                autoComplete="off">
                <input type="hidden" name="form-name" value="contact" />
                <div className={item}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name"/>
                    </div>
                    <div>
                        <label htmlFor="email">Email Address:</label>
                        <input type="text" name="email"/>
                    </div>
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" id="" cols="30" rows="10"></textarea>
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
                </form>
            </div>
    )
}
