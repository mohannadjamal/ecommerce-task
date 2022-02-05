import {
  Card,
  CardActionArea,
  CardMedia,
  Box,
  Typography,
} from '@mui/material';

type Prop = {
  id: string;
  title: string;
  image: string;
  price: number;
};

function CarouselItem(props: Prop) {
  return (
    <Card elevation={0}>
      <CardActionArea>
        <Box
          sx={{
            display: 'inline-flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <CardMedia
            component='img'
            image={props.image}
            alt={props.title}
            sx={{
              minHeight: '300px',
            }}
          />
          <Typography variant='body2' sx={{ color: '#646464' }}>
            {props.title}
          </Typography>
          <Typography
            variant='subtitle1'
            sx={{ fontWeight: 700, color: '#b1203c' }}
          >
            ${props.price.toFixed(2)}
          </Typography>
        </Box>
      </CardActionArea>
    </Card>
  );
}

export default CarouselItem;
