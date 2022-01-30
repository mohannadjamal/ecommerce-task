import styles from './Layout.module.scss';

import MainNavigation from './MainNavigation';
import Banner from './Banner';
import Footer from './Footer';
import Newsletter from './Newsletter';

type Prop = {
  children?: React.ReactChild;
};

function Layout(props: Prop) {
  return (
    <div>
      <Banner/>
      <MainNavigation />
      <main className={styles.main}>{props.children}</main>
      <Newsletter/>
      <Footer/>
    </div>
  );
}

export default Layout;
