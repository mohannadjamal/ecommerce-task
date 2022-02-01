import React, { useState, useRef } from 'react';

import CarouselItem from './CarouselItem';

import styles from './Carousel.module.scss';

type Prop = {
  title: string;
  itemsPerPage: number;
  items: any[];
};
function Carousel(props: Prop) {
  const [currentPage, setCurrentPage] = useState(1);
  let currentPageRef = useRef<any>(null);

  const indexOfLastItem = currentPage * props.itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - props.itemsPerPage;
  const currentItems = props.items.slice(indexOfFirstItem, indexOfLastItem);

  const pageNumbers: number[] = [];
  for (
    let i = 1;
    i <= Math.ceil(props.items.length / props.itemsPerPage);
    i++
  ) {
    pageNumbers.push(i);
  }
  let paginateInterval: NodeJS.Timer;
  const paginate = (pageNumber: number) => {
    if (currentPage === pageNumber) {
      currentPageRef.current!.classList.remove(`${styles.next_animation}`);
      currentPageRef.current!.classList.remove(`${styles.prev_animation}`);
    } else if (currentPage > pageNumber) {
      currentPageRef.current!.classList.add(`${styles.prev_animation}`);
    } else {
      currentPageRef.current!.classList.add(`${styles.next_animation}`);
    }
    setCurrentPage(pageNumber);
    clearInterval(paginateInterval);
  };

  if (currentPage != pageNumbers[pageNumbers.length - 1]) {
    console.log(currentPage + ' - ' + pageNumbers[pageNumbers.length - 1]);
    paginateInterval = setInterval(() => {
      paginate(currentPage + 1);
    }, 5000);
  } else {
    paginateInterval = setInterval(() => {
      paginate(1);
    }, 5000);
  }
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{props.title}</h2>
      <div
        className={styles.cardcontainer}
        ref={currentPageRef}
        onAnimationEnd={() => {
          currentPageRef.current!.classList.remove(`${styles.next_animation}`);
          currentPageRef.current!.classList.remove(`${styles.prev_animation}`);
        }}
      >
        {currentItems.map((item) => (
          <div className={styles.card}>
            <CarouselItem
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
            />
          </div>
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
export default Carousel;
