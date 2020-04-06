import React from 'react';
import './chat.css';
import PropTypes from 'prop-types';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          online: props.online
        };
    }
    render() {
    return (
        <div className="Contact">
            <img className="avatar" src={this.props.avatar} alt="avatar" />
            <div>
               <h2 className="name">{this.props.name}</h2>  
               <div className="status" onClick={event => {
                    const newState = !this.state.online;
                    this.setState({online: newState});
                  }}> 
                  <div className={this.state.online ? 'status-online' : 'status-offline'}></div>
                  <p className="status-text">{this.state.online ? 'online' : 'offline'}</p>
               </div>
            </div>
        </div>
    )
}}

Contact.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    online: PropTypes.bool.isRequired,
  };

export default Contact;