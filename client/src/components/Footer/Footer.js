import React from 'react';
import './footer.css';
import { Button } from '../Navbar/Button';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import 'moment-timezone';



function Footer() {
  var dateToFormat= new Date('Mon Jan 12 00:00:00 GMT 2015');
  // Moment(dateToFormat)
  // dateToFormat.format('YYYY-MM-DD HH:mm');




  return (
    
    <div className='footer-container'>
          <div className='footer-links'>
        <div className='footer-link-wrapper'>
      
        </div>
      </div>
    
    
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              <i className='fas fa-microscope' />
            </Link>
          </div>


            
            
        
    
          {/* filter={toUpperCaseFilter} */}

         
        
          <div className='social-icon-link'>
            <a  href='/login'>Login</a>
            <a  href='/register'>SignUp</a>
            <a  href='/MyList'>Wishlist</a>
          
          </div>
          
          <small className='website-rights'>
          <Moment component={dateToFormat} /> 
          </small>

          <div className='social-icons'>

            <a 
                className ="social-icon-link twitter"
                href="https://github.com/"
                target= '_blank'
                aria-label
              a> 
              <i className='fab fa-github' />
              Parker
              </a> 
              <a 
                className ="social-icon-link twitter"
                href="https://github.com/"
                target= '_blank'
                aria-label
              a> 
              <i className='fab fa-github' />
              Emilio
              </a> 
              <a 
                className ="social-icon-link twitter"
                href="https://github.com/"
                target= '_blank'
                aria-label
              a> 
              <i className='fab fa-github' />
              Chambers
              </a> 
              <a 
                className ="social-icon-link twitter"
                href="https://github.com/"
                target= '_blank'
                aria-label
              a> 
              <i className='fab fa-github' />
              Thomas
          </a>
          
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;