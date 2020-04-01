import React from 'react';
import './chat.css';
import PropTypes from 'prop-types';

const Contact = (props) => {
    return (
        <div className="Contact">
            <img className="avatar" src={props.avatar} alt="avatar" />
            <div>
               <h2 className="name">{props.name}</h2>  
               <div className="status"> 
                  <div className={props.online ? 'status-online' : 'status-offline'}></div>
                  <p className="status-text">{props.online ? 'online' : 'offline'}</p>
               </div>
            </div>
        </div>
    )
}

Contact.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    online: PropTypes.bool.isRequired,
  };

export default Contact;