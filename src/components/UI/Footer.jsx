import facebook from '../../components/images/icons/Facebook.png';
import twitter from '../../components/images/icons/Twitter4.png';
import instagram from '../../components/images/icons/Instagram.png';
import youtube from '../../components/images/icons/Youtube.png';
import starryBack from '../../components/images/website-img/StarryBack.jpeg';

import './Footer.css';
import { Image, Box } from '@chakra-ui/react';

const Footer = () => {

  return (
    <div
  className="footer"
  style={{
    background: `linear-gradient(to bottom, rgba(30, 39, 54, 0.9), rgba(30, 39, 54, 0.8)), url(${starryBack})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  }}
>
        <div className='sb__footersection__padding'>
          <div className='sb__footer-links'>
            <div className='sb__footer-links_div'>
              <h4>Check for:</h4>
              <a href='news'>
                <p>News</p>
              </a>
              <a href='community'>
                <p>Community</p>
              </a>
              <a href='whitepaper'>
                <p>Whitepaper</p>
              </a>
            </div>
            <div className='sb__footer-links_div'>
              <h4>Resources</h4>
              <a href='resource'>
                <p>Resource Center</p>
              </a>
              <a href='testimonials'>
                <p>Testimonials</p>
              </a>
              <a href='stv'>
                <p>STV</p>
              </a>
            </div>
            <div className='sb__footer-links_div'>
              <h4>Partners</h4>
              <a href='potokos'>
                <p>Potokos' Group</p>
              </a>
              <a href='hotdog'>
                <p>LaVaineta Co.</p>
              </a>
            </div>
            <div className='sb__footer-links_div'>
              <h4>Company</h4>
              <a href='company'>
                <p>About</p>
              </a>
              <a href='press'>
                <p>Press</p>
              </a>
              <a href='career'>
                <p>Career</p>
              </a>
              <a href='contact'>
                <p>Contact</p>
              </a>
            </div>
            <div className='sb__footer-links_div'>
              <h4>Coming soon on:</h4>
              <Box className='socialmedia'>
                <p><Image src={facebook} alt='facebook icon' h='21px' /></p>
                <p><Image src={twitter} alt='twitter icon' h='21px' /></p>
                <p><Image src={instagram} alt='instagram icon' h='17px' /></p>
                <p><Image src={youtube} alt='youtube icon' h='26px' /></p>
              </Box>
            </div>
          </div>

          <hr></hr>

          <div className='sb__footer-below'>
            <div className='sb__footer-copyright'>
              <p>
                @{new Date().getFullYear()} CosmosWarriors. All rights reserved.
              </p>
            </div>
            <div className='sb__footer-below-links'>
              <a href='/terms'><div><p>Terms & Conditions</p></div></a>
              <a href='/privacy'><div><p>Privacy</p></div></a>
              <a href='/security'><div><p>Security</p></div></a>
              <a href='/cookie'><div><p>Cookie Declaration</p></div></a>
            </div>
          </div>

        </div>
      </div>
  )
};

export default Footer;