import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import { Product } from '../types';
import { getImageUrl } from '../services/api';

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  const mainImage = product.images.find(img => img.order === 1);
  const imageUrl = mainImage 
    ? getImageUrl(mainImage.company_key || '2007', mainImage.path)
    : '';

  return (
    <Card 
      onClick={onClick}
      sx={{ 
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer',
        '&:hover': {
          transform: 'scale(1.02)',
          transition: 'transform 0.2s ease-in-out'
        }
      }}
    >
      <Box sx={{ position: 'relative', pt: '100%', width: '100%' }}>
        <CardMedia
          component="img"
          image={imageUrl}
          alt={product.name}
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
      </Box>
      <CardContent sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', gap: 1, alignItems: 'center' }}>
        <Typography variant="subtitle1" align="center" gutterBottom noWrap>
          {product.name}
        </Typography>
        <Typography variant="subtitle1" align="center" gutterBottom noWrap>
          Ref: {product.reference}
        </Typography>
      </CardContent>
    </Card>
  );
};
