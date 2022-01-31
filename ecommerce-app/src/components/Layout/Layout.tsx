import MainNavigation from '../MainNavigation/MainNavigation';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Newsletter from '../Newsletter/Newsletter';

import styles from './Layout.module.scss';

type Prop = {
  children?: React.ReactChild;
};

function Layout(props: Prop) {
  return (
    <div>
      <Banner />
      <MainNavigation />
      <main className={styles.main}>{props.children}</main>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Layout;
