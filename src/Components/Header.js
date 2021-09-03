import React, { Component } from 'react';
import '../App.css'

class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Header
