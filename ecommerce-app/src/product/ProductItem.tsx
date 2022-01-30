import { Card, CardActionArea, CardMedia } from '@mui/material';
import styles from './ProductItem.module.scss';

type Prop = {
  id: string;
  title: string;
  image: string;
  price: number;
};

function ProductItem(props: Prop) {
  return (
    <Card sx={{ width: 255, boxShadow: 0 }}>
      <CardActionArea>
        <div className={styles.card}>
          <CardMedia component='img' image={props.image} alt={props.title} />
          <h4>{props.title}</h4>
          <span>${props.price.toFixed(2)}</span>
        </div>
      </CardActionArea>
    </Card>
  );
}

export default ProductItem;
