import React from 'react';
import ReactDOM from 'react-dom';

export default function Footer() {
    return (
        <div className="footer">
            <a href="https://twitter.com/m_chakarov" className="social-link">
                <i className="fa fa-twitter"></i>
            </a>
            <a href="https://www.facebook.com/martin.d.chakarov/" className="social-link">
                <i className="fa fa-facebook"></i>
            </a>
            <a href="https://www.instagram.com/martin_chakarov/" className="social-link">
                <i className="fa fa-instagram"></i>
            </a>
            <a href="https://github.com/martinchakarov" className="social-link">
                <i className="fa fa-github"></i>
            </a>
        </div>
    )
}