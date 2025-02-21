import React, { useEffect, useState } from 'react';
import { Container, Grid, Typography, CircularProgress, Box } from '@mui/material';
import { ProductCard } from '../components/ProductCard';
import { Product } from '../types';
import { getProducts } from '../services/api';
import { useNavigate } from 'react-router-dom';

export const ProductsPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error('Erro ao carregar produtos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Container  sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Produtos
      </Typography>
      <Grid container spacing={3} alignItems="stretch">
        {products.map((product) => (
          <Grid 
            item 
            xs={12} 
            sm={6} 
            md={4} 
            key={product.id}
            sx={{ 
              display: 'flex',
              height: { md: 450 } // Altura fixa para desktop
            }}
          >
            <ProductCard
              product={product}
              onClick={() => navigate(`/product/${product.id}`)}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
