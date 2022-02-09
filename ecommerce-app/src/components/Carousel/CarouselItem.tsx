import { Link } from 'react-router-dom';

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
  discount: number;
};

function CarouselItem(props: Prop) {
  return (
    <Card elevation={0}>
      <CardActionArea component={Link} to={`/product/${props.id}`}>
        <Box
          sx={{
            display: 'inline-flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            width: 1,
          }}
        >
          {props.discount > 0 && (
            <Box
              sx={{
                position: 'absolute',
                top: '10%',
                left: 0,
                backgroundColor: '#ec1835',
                width: '20%',
                height: '15%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Typography
                variant='body2'
                sx={{
                  color: '#ffffff',
                  fontWeight: 500,
                  fontSize: {
                    xs: 8,
                    sm: 12,
                    md: 'inital',
                  },
                }}
              >
                -{props.discount * 100}%
              </Typography>
            </Box>
          )}
          <CardMedia
            component='img'
            image={props.image}
            alt={props.title}
            sx={{
              height: {
                xs: 50,
                sm: 150,
                md: 300,
              },
              width: 1,
              objectFit: 'contain',
            }}
          />
          <Typography
            variant='body2'
            sx={{ fontWeight: 700, fontSize: { xs: 8, sm: 12, md: 'initial' } }}
          >
            {props.title}
          </Typography>
          {props.discount > 0 ? (
            <Box sx={{ display: 'flex', alignItems: 'baseline' }}>
              <Typography
                variant='subtitle1'
                sx={{
                  color: '#b1203c',
                  fontWeight: 700,
                  fontSize: { xs: 8, sm: 12, md: 'initial' },
                }}
              >
                ${(props.price - props.price * props.discount).toFixed(2)}
              </Typography>
              <Typography
                variant='subtitle2'
                sx={{
                  color: '#c4c4c4',
                  fontWeight: 700,
                  fontSize: { xs: 6, sm: 10, md: 'initial' },
                  textDecoration: 'line-through',
                  marginLeft: '0.5rem',
                }}
              >
                ${props.price.toFixed(2)}
              </Typography>
            </Box>
          ) : (
            <Typography
              variant='subtitle1'
              sx={{
                fontWeight: 700,
                fontSize: { xs: 8, sm: 12, md: 'initial' },
                color: '#b1203c',
              }}
            >
              ${props.price.toFixed(2)}
            </Typography>
          )}
        </Box>
      </CardActionArea>
    </Card>
  );
}

export default CarouselItem;
