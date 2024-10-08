import React from 'react';
import art from '../assets/art.jpg';
import Services from './services';
import './base.css';
import house from '../assets/house.jpg'
import happy from '../assets/happy.jpg'
import paint from '../assets/paint.jpg'
import law from '../assets/law.jpg'
import couple from '../assets/couple.jpg'
import blessed from '../assets/blessed.jpg'
import friends from '../assets/friends.jpg'

const Home = ()=> {
  
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    height: '100%', 
  
  };

  const bodyStyle = {
    backgroundColor: 'Gainsboro',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    minHeight: '100vh',
    alignItems:'center',
    justifyContent:'center',
  };
  const contentStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flexGrow: 1, 
 
  };

  const heading = {
    fontSize: '3em',
    color: 'DarkSlateGrey',
    paddingTop: '50px',
    fontFamily: 'Georgia, serif',
  };

  const subheading = {
    fontSize: '2em',
    color: 'MintCream',
    paddingTop: '10px',
    fontFamily: 'Georgia, serif',
    
  };

  const subcontent = {
    paddingBottom: '10px',
    fontWeight: '600',
    marginBottom: '5px',
    fontSize: '1em',
    color: 'DarkSlateGrey',
    fontFamily: 'Georgia, serif',
    textAlign: 'center', 
  };
 
 
  return (
    <div  style={bodyStyle}>
      <div style={containerStyle}>
        <div style={contentStyle}>
          <h1 style={heading}>ArtHub_Ke</h1>
          <h2 style={subcontent}>Our specially designed Wall Art is created to<br />
          especially give you an in-tune feeling with your environment<br />
          whether at home, office, leisure time, or hosting special events,<br />
          think of this as an elevator to your mood every time<br />
          that sets the tone of the room.
        </h2>
        <h1 style={subheading} >Art Collections</h1>
          <div className='sections-container '>
                <div className='section-links'>
                    <h1 className='section-link-card flex'>
                    <div className='image-container'>
                     <img src={art} alt='art-heart' className='rounded-lg'/>
                   
                     </div>
                     <p>Floral Art</p>
                   </h1>
                   <h1 className='section-link-card flex'>
                    <div className='image-container'>
                     <img src={house} alt='art-heart'className='rounded-lg' />
                     </div>
                     <p>Abstract art</p>
                   </h1>
                   <h1 className='section-link-card flex'>
                    <div className='image-container'>
                     <img src={happy} alt='art-heart' className='rounded-lg'/>
                     </div>
                     <p>Word Art</p>
                   </h1>
                   <h1 className='section-link-card flex'>
                    <div className='image-container'>
                    <img src={paint} alt='art-heart'className='rounded-lg' />
                     </div>
                     <p>Floral Art</p>
                   </h1>
                   <h1 className='section-link-card flex'>
                    <div className='image-container'>
                     <img src={law} alt='art-heart'className='rounded-lg'  />
                     </div>
                     <p>Word Art</p>
                   </h1>
                   <h1 className='section-link-card flex'>
                    <div className='image-container'>
                     <img src={couple} alt='art-heart'className='rounded-lg'  />
                     </div>
                     <p>Couple Designs</p>
                   </h1>
                   <h1 className='section-link-card flex'>
                    <div className='image-container'>
                    <img src={blessed} alt='art-heart'className='rounded-lg' />
                     </div>
                     <p>Abstract Art</p>
                   </h1>
                   <h1 className='section-link-card flex'>
                    <div className='image-container'>
                    <img src={friends} alt='art-heart'className='rounded-lg' />
                     </div>
                     <p>Picture Art</p>
                   </h1>
                </div>
            </div>
          </div>
        </div>
        <Services/>

      </div>
  );
};

export default Home;
