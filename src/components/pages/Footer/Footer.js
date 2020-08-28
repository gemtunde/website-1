import React from 'react';
import './Footer.css';
import { Button } from '../../Button';
import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import { MdFingerprint } from 'react-icons/md';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Get a Gladepay Virtual Card
        </p>
        <p className='footer-subscription-text'>
         Sign up and Enjoy all of out benefits. Its free, Simple and Easy. Get Started Today.
        </p>
        <div className='input-areas'>
          <form>
            <Button buttonStyle='btn--outline'>Get Your Card Free</Button>
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2> </h2>
            <p>Glade operates and design the website and Apps. </p>
          </div>
          <div className='footer-link-items'>
            <h2>Newsletter</h2>
            <p> Sign up for alerts, special offers and newsletters</p>
            <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='GladepayVirtualxyz.com'
            />
            <Button buttonStyle='btn--outline'>Go</Button>
          </form>
        </div>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2></h2>
            <Link to='/'>Terms and Conditions </Link>
            <Link to='/'>Privacy Policy </Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Contact us </Link>
          </div>
          <div className='footer-link-items'>
            <h2></h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              <MdFingerprint className='navbar-icon' />
              Glade
            </Link>
          </div>
          <small className='website-rights'>GladePayDigital © 2020</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <FaFacebook />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <FaInstagram />
            </Link>
            <Link
              className='social-icon-link'
              to={
                '//www.youtube.com/'
              }
              target='_blank'
              aria-label='Youtube'
            >
              <FaYoutube />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <FaTwitter />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
