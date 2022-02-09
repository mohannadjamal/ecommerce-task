import { Link } from 'react-router-dom';

import {
  Card,
  CardActionArea,
  Box,
  CardMedia,
  Typography,
} from '@mui/material';

type Prop = {
  id: string;
  title: string;
  image: string;
  price: number;
  discount: number;
};
function GroupedItem(props: Prop) {
  return (
    <Card elevation={0}>
      <CardActionArea component={Link} to={`/product/${props.id}`}>
        <Box
          sx={{
            display: 'inline-flex',
            position: 'relative',
          }}
        >
          {props.discount > 0 && (
            <Box
              sx={{
                position: 'absolute',
                top: '20%',
                left: 0,
                backgroundColor: '#ec1835',
                width: '10%',
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
                    lg: 'intial',
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
              height: { xs: 50, sm: 50, md: 75, lg: 150 },
              width: { xs: 50, sm: 50, md: 75, lg: 150 },
              objectFit: 'contain',
            }}
          />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              marginLeft: '1rem',
            }}
          >
            <Typography
              variant='body2'
              sx={{
                fontWeight: 700,
                fontSize: {
                  xs: 8,
                  sm: 12,
                  lg: 18,
                },
              }}
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
                    fontSize: {
                      xs: 8,
                      sm: 12,
                      lg: 18,
                    },
                  }}
                >
                  ${(props.price - props.price * props.discount).toFixed(2)}
                </Typography>
                <Typography
                  variant='subtitle2'
                  sx={{
                    color: '#c4c4c4',
                    fontWeight: 700,
                    textDecoration: 'line-through',
                    marginLeft: '1rem',
                    fontSize: {
                      xs: 6,
                      sm: 10,
                      lg: 16,
                    },
                  }}
                >
                  ${props.price.toFixed(2)}
                </Typography>
              </Box>
            ) : (
              <Typography
                variant='subtitle1'
                sx={{
                  color: '#b1203c',
                  fontSize: {
                    xs: 8,
                    sm: 12,
                    md: 'initial',
                    lg: 'intial',
                  },
                }}
              >
                ${props.price.toFixed(2)}
              </Typography>
            )}
          </Box>
        </Box>
      </CardActionArea>
    </Card>
  );
}

export default GroupedItem;
