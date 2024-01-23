import React from 'react';
import {Link} from "react-router-dom";

const Navigation = () => {
  

  const headingStyle = {
    padding: '20px 5px',
    borderBottom:'2px solid DarkSlateGrey',
    paddingBottom: '10px',
    fontWeight: '600',
    marginBottom: '10px', 
    fontSize: '1em',
    color:'DarkSlateGrey',
    
  };
  const containerStyle = {
    display: 'inline-block',
    backgroundColor: 'rgba(169, 169, 169, 0.5)', // Greyish transparent color
    padding: '40px', // Optional: Add padding to create space between the text and the box
    borderRadius: '10px', //
  };

  return (
    
       <nav style={{ width: '80%', maxWidth: '600px',marginLeft: '50px' }}>
        <ul style={containerStyle}>
        <li style={headingStyle}>
        <Link to='/profile'>
                 Profile
                </Link>
          </li>
          <li style={headingStyle}>
        <Link to='/services'>
                 Services
                </Link>
          </li>
          <li style={headingStyle}>
        <Link to='/listings'>
                 Listings
                </Link>
          </li>
          <li style={headingStyle}>
        <Link to='/contacts'>
                 Contact
                </Link>
          </li>
        
        </ul>
      </nav>
    
  );
};

export default Navigation;