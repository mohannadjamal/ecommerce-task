import styles from './ProductCarousel.module.scss';
import './ProductCarousel.module.scss';
import React, { useState, useEffect } from 'react';
import ProductItem from './ProductItem';
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
function ProductCarousel() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);

  const items = [item, item, item, item, item, item2, item2, item, item];

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(items.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div>
      <h2>Smartphones & Tablets</h2>
      <div className={styles.cardcontainer}>
        {currentItems.map((it) => (
          <ProductItem
            key={it.id}
            id={it.id}
            title={it.title}
            image={it.image}
            price={it.price}
          />
        ))}
      </div>
      <nav>
        <ul>
          {pageNumbers.map((number) => (
            <li key={number}>
              <a
                className={currentPage === number ? `${styles.active}` : ''}
                onClick={() => {
                  paginate(number);
                }}
                href='#!'
              >
                <div className={styles.line}></div>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
export default ProductCarousel;
