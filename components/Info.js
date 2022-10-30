import React from 'react';
import ReactDOM from 'react-dom';

export default function Info() {
    return (
        <div className="info">
            <img src="../images/photo.png" className="photo"/>
            <div className="details">
                <h1>Martin Chakarov</h1>
                <h3>Analytics Engineer</h3>
                <h4>chakarov.dev</h4>
            </div>
            <div className="buttons"> 
                <a className="email" href="mailto:martin.d.chakarov@gmail.com">
                <i className="fa fa-envelope"></i> <p>Email</p>
                </a>
                <a className="linkedin" href="https://www.linkedin.com/in/martin-chakarov/">
                <i className="fa fa-linkedin"></i> <p>LinkedIn</p>
                </a>
            </div>
        </div>
    )
}