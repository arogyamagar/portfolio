import { Link } from 'gatsby'
import React from 'react'

export default function Navbar() {
    return (
        <nav>
            <h1>arogyamagar</h1>
            <div className="links">
                <Link to='/' activeClassName="active">Home</Link>
                <Link to='/projects' activeClassName="active">Projects</Link>
                <Link to='/contact' activeClassName="active">Contact</Link>
            </div>
            <div className="mobile-links">
                <Link to='/' activeClassName="active">
                    <box-icon name='home-alt' color="white"></box-icon><p>Home</p>
                </Link>
                <Link to='/projects' activeClassName="active">
                    <box-icon name='task' color="white"></box-icon><p>Projects</p>
                </Link>
                <Link to='/contact' activeClassName="active">
                    <box-icon name='message-alt-detail' color='white' ></box-icon><p>Contact</p>
                </Link>
            </div>
        </nav>
    )
}
