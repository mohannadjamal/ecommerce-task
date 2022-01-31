import Carousel from '../components/Carousel/Carousel';

import styles from './Homepage.module.scss';

import ad from '../images/JBLAd.png';

function Homepage() {
  const item = {
    id: 'AASDFD',
    title: 'Asus Zenbook 14',
    image:
      'https://eilat.payngo.co.il/media/catalog/product/cache/6b2f4d2b8c238597c4864fc429fa65dd/z/e/zenbook-14_ux425_icl_product-photo_2g_pine-grey_05_touchpad.jpg',
    price: 999,
  };
  const item2 = {
    id: 'AASDFD',
    title: 'HP Omen',
    image: 'https://www.notebookcheck.net/uploads/tx_nbc2/HPOmen15-dh__1_.jpg',
    price: 999,
  };
  const items = [item, item, item, item, item, item2, item2, item, item];
  return (
    <div className={styles.container}>
      <div className={styles.upperpart}>
        <Carousel
          title={'Smartphones & Tablets'}
          itemsPerPage={6}
          items={items}
        />
      </div>
      <div className={styles.lowerpart}>
        <div className={styles.middlepart}>
          <div className={styles.carousel}>
            <Carousel title={'Audio & Sound'} itemsPerPage={4} items={items} />
          </div>
          <img src={ad} alt='JBL Bluetooth Speaker'></img>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
