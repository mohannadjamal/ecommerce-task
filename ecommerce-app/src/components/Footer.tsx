import styles from './Footer.module.scss';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import visa from '../images/visa.png';
import mastercard from '../images/master.png';
import stripe from '../images/stripe.png';
import paypal from '../images/paypal.png';
import discover from '../images/discover.png';

import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.uppercontainer}>
          <div className={styles.info}>
            <div className={styles.info__content}>
              <h5>Our office Address</h5>
              <span>169 Florida Ave, L.A City</span>
            </div>
            <div className={styles.info__content}>
              <h5>Please Call Us:</h5>
              <span>(+84) 1234 686 9669</span>
            </div>
          </div>
          <div className={styles.social}>
            <IconButton className={styles.icon}>
              <FacebookIcon />
            </IconButton>
            <IconButton className={styles.icon}>
              <TwitterIcon />
            </IconButton>
            <IconButton className={styles.icon}>
              <PinterestIcon />
            </IconButton>
            <IconButton className={styles.icon}>
              <GoogleIcon />
            </IconButton>
            <IconButton className={styles.icon}>
              <InstagramIcon />
            </IconButton>
            <IconButton className={styles.icon}>
              <RssFeedIcon />
            </IconButton>
          </div>
        </div>

        <div className={styles.lowercontainer}>
          <div className={styles.adresses}>
            <h3>Our Stores</h3>
            <ul>
              <li>
                <span>501 Floor, Nguyen Ngoc Vu, Cau Glay, Ha Noi</span>
              </li>
              <li>
                <span>741 - 11A Sandiago, L.A City, USA</span>
              </li>
              <li>
                <span>
                  5th Floor, 169 Green Lakes, WestBrown, Liverpool City
                </span>
              </li>
              <li>
                <span>628 Brooklyn Streen, Fullham District, Wales</span>
              </li>
              <li>
                <span>10001 Street, WinLow District, Mexico</span>
              </li>
              <li>
                <span>1st Floor BrickHouse, 250 Wall Street, C.A City, UK</span>
              </li>
            </ul>
          </div>
          <div className={styles.links}>
            <h3>My Account</h3>
            <ul>
              <li>
                <Link to='/'>My Cart</Link>
              </li>
              <li>
                <Link to='/'>Check Out</Link>
              </li>
              <li>
                <Link to='/'>Wishlist</Link>
              </li>
              <li>
                <Link to='/'>Term & Policy</Link>
              </li>
              <li>
                <Link to='/'>Your Account</Link>
              </li>
            </ul>
          </div>
          <div className={styles.links}>
            <h3>Information</h3>
            <ul>
              <li>
                <Link to='/'>Shipping & Return</Link>
              </li>
              <li>
                <Link to='/'>Giftcards</Link>
              </li>
              <li>
                <Link to='/'>Track My Order</Link>
              </li>
              <li>
                <Link to='/'>Term & Policy</Link>
              </li>
              <li>
                <Link to='/'>FAQs</Link>
              </li>
            </ul>
          </div>
          <div className={styles.links}>
            <h3>How to Buy</h3>
            <ul>
              <li>
                <Link to='/'>Making Payments</Link>
              </li>
              <li>
                <Link to='/'>Delivery Options</Link>
              </li>
              <li>
                <Link to='/'>Buyer Protection</Link>
              </li>
              <li>
                <Link to='/'>New User Guide</Link>
              </li>
              <li>
                <Link to='/'>Partnership</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <footer>
        <span>
          © 2022 Made by <b>Mohannad Jamal</b>. All Rights Reserved.
        </span>
        <div className={styles.payments}>
          <img src={visa} alt='Visa' className={styles.image}></img>
          <img src={mastercard} alt='MasterCard' className={styles.image}></img>
          <img src={paypal} alt='PayPal' className={styles.image}></img>
          <img src={stripe} alt='Stripe' className={styles.image}></img>
          <img src={discover} alt='Visa' className={styles.image}></img>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
