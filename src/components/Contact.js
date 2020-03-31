import React from 'react';

const name = 'Kristin Curtis';
const avatar = 'https://randomuser.me/api/portraits/women/63.jpg';
const online = true;

function Contact() {
    return (
        <div className="Contact">
            <img className="avatar" src={avatar} alt="avatar" />
            <div>
               <p className="name">{name}</p>  
               <p className="status"> <span className="status-online"></span> <span className="status-text"> {online ? 'Online' : 'Offline'} </span></p>
            </div>
        </div>
    )
}

export default Contact;