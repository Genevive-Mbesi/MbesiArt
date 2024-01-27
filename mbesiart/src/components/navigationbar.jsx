import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {

  const headingStyle = {
    padding: '10px',
    paddingBottom: '10px',
    fontWeight: '300',
    marginBottom: '10px',
    color: 'DarkSlateGrey',
    cursor: 'pointer',
    fontFamily: 'Georgia, serif',
  };

  const itemStyle = {
    padding: '0.2rem',
    marginBottom: '0.2rem',
    color: 'DarkSlateGrey',
    cursor: 'pointer',
    fontFamily: 'Georgia, serif',
    margin:'2px',
    
  };

  const containerStyle = {
    display: 'flex',
    padding: '0.2rem',
    borderRadius: '10px',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '30px',
    margin: '5px',
  };
  const navStyle = {
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
  };
  

  return (
    <nav style={navStyle}>
      <ul style={containerStyle}>
        <li style={itemStyle}>
          <Link to="/profile" style={headingStyle}>
            Profile
          </Link>
        </li>
        <li style={itemStyle}>
          <Link to="/services" style={headingStyle}>
            Services
          </Link>
        </li>
        <li style={itemStyle}>
          <Link to="/listings" style={headingStyle}>
            Team
          </Link>
        </li>
        <li style={itemStyle}>
          <Link to="/contacts" style={headingStyle}>
            Contacts
          </Link>
        </li>
        <li style={itemStyle}>
          <a href="https://www.instagram.com/wall_art_heart?igsh=OHk4bmZrb3RkcjVy" style={headingStyle}>
            Designs
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
