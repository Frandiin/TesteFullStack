import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box, CircularProgress } from "@mui/material";
import { Product } from "../types";
import { getProductById, getProducts } from "../services/api";
import { ProductHeader } from "../components/ProductHeader";
import { ProductGallery } from "../components/ProductGallery";
import { ProductControls } from "../components/ProductControls";
import { ProductFooter } from "../components/ProductFooter";
import { ProductInfoModal } from "../components/ProductInfoModal";

interface ProductState {
  [productId: string]: { currentValue: number; previousValue: number };
}

export const ProductDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentValue, setCurrentValue] = useState(0);
  const [previousValue, setPreviousValue] = useState(0);
  const [accumulatedValue, setAccumulatedValue] = useState(0);
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await getProducts();
        setAllProducts(response);
        if (id) {
          const data = await getProductById(Number(id));
          setProduct(data);
          const storedData = localStorage.getItem("productStates");
          const storedAccumulated = localStorage.getItem("accumulatedValue");
          if (storedAccumulated)
            setAccumulatedValue(parseFloat(storedAccumulated));
          if (storedData) {
            const productStates: ProductState = JSON.parse(storedData);
            if (productStates[id]) {
              setCurrentValue(productStates[id].currentValue);
              setPreviousValue(productStates[id].previousValue);
            }
          }
        }
      } catch (error) {
        console.error("Erro ao carregar produto:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  const updateStorageAndAccumulated = (
    newCurrentValue: number,
    newPreviousValue: number
  ) => {
    if (!id) return;
    const storedData = localStorage.getItem("productStates");
    const productStates: ProductState = storedData
      ? JSON.parse(storedData)
      : {};
    productStates[id] = {
      currentValue: newCurrentValue,
      previousValue: newPreviousValue,
    };
    const newAccumulated = Object.values(productStates).reduce(
      (sum, state) => sum + state.currentValue,
      0
    );
    localStorage.setItem("productStates", JSON.stringify(productStates));
    localStorage.setItem("accumulatedValue", newAccumulated.toString());
    setAccumulatedValue(newAccumulated);
  };

  const handleIncrement = () => {
    if (product?.price == null) return;
    const price = product.price;
    const newCurrentValue = currentValue + price;
    const newPreviousValue = previousValue + 1;
    setCurrentValue(newCurrentValue);
    setPreviousValue(newPreviousValue);
    updateStorageAndAccumulated(newCurrentValue, newPreviousValue);
  };

  const handleDecrement = () => {
    if (product?.price == null) return;
    const price = product.price;
    if (currentValue >= price) {
      const newCurrentValue = currentValue - price;
      const newPreviousValue = previousValue - 1;
      setCurrentValue(newCurrentValue);
      setPreviousValue(newPreviousValue);
      updateStorageAndAccumulated(newCurrentValue, newPreviousValue);
    } else if (currentValue > 0) {
      setCurrentValue(0);
      setPreviousValue(0);
      updateStorageAndAccumulated(0, 0);
    }
  };

  if (loading || !product) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ width: "100%" }}>
      <ProductHeader
        product={product}
        allProducts={allProducts}
        onNavigateHome={() => navigate("/")}
        onNextProduct={() => {
          const index = allProducts.findIndex((p) => p.id === product.id);
          if (index < allProducts.length - 1)
            navigate(`/product/${allProducts[index + 1].id}`);
        }}
        onPreviousProduct={() => {
          const index = allProducts.findIndex((p) => p.id === product.id);
          if (index > 0) navigate(`/product/${allProducts[index - 1].id}`);
        }}
      />
      <Box sx={{ maxWidth: "1980px", mx: "auto" }}>
        <ProductGallery product={product} />
        <ProductControls
          product={product}
          currentValue={currentValue}
          previousValue={previousValue}
          accumulatedValue={accumulatedValue}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onOpenModal={() => setIsInfoModalOpen(true)}
        />
        <ProductFooter product={product} />
      </Box>
      <ProductInfoModal
        open={isInfoModalOpen}
        onClose={() => setIsInfoModalOpen(false)}
        product={product}
      />
    </Box>
  );
};
