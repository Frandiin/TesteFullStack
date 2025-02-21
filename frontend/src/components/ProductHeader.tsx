import React from "react";
import { Box, Button, IconButton, Typography } from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { Product } from "../types";

interface ProductHeaderProps {
  product: Product;
  allProducts: Product[];
  onNavigateHome: () => void;
  onNextProduct: () => void;
  onPreviousProduct: () => void;
}

export const ProductHeader: React.FC<ProductHeaderProps> = ({
  product,
  allProducts,
  onNavigateHome,
  onNextProduct,
  onPreviousProduct,
}) => {
  const currentIndex = allProducts.findIndex((p) => p.id === product.id);

  return (
    <Box
      sx={{
        bgcolor: "#809caa",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        p: "5px",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      }}
    >
      <Button
        onClick={onNavigateHome}
        sx={{
          color: "white",
          textTransform: "uppercase",
          fontSize: "12px",
          minWidth: 0,
        }}
        aria-label="Voltar para página inicial"
      >
        <KeyboardArrowLeft fontSize="small" />
      </Button>
      <Box
        display="flex"
        alignItems="center"
        gap={1}
        justifyContent="center"
        flex={1}
      >
        {currentIndex > 0 && (
          <IconButton
            sx={{
              bgcolor: "white",
              color: "#b0bec5",
              "&:hover": { bgcolor: "#6b8693", color: "white" },
              width: 24,
              height: 24,
              borderRadius: "50%",
              p: "2px",
            }}
            onClick={onPreviousProduct}
            aria-label="Produto anterior"
          >
            <KeyboardArrowLeft fontSize="small" />
          </IconButton>
        )}
        <Typography
          variant="body1"
          sx={{
            backgroundColor: "#fff",
            p: "8px",
            borderRadius: 2,
            textAlign: "center",
            fontSize: "12px",
            fontWeight: "bold",
            color: "#6b8693",
          }}
        >
          ({product.brand?.length}) {product.brand}
        </Typography>
        {currentIndex < allProducts.length - 1 && (
          <IconButton
            sx={{
              bgcolor: "white",
              color: "#b0bec5",
              "&:hover": { bgcolor: "#6b8693", color: "white" },
              width: 24,
              height: 24,
              borderRadius: "50%",
              p: "2px",
            }}
            onClick={onNextProduct}
            aria-label="Próximo produto"
          >
            <KeyboardArrowRight fontSize="small" />
          </IconButton>
        )}
      </Box>
      <IconButton
        sx={{
          bgcolor: "white",
          color: "#b0bec5",
          "&:hover": { bgcolor: "#6b8693", color: "white" },
          width: 24,
          height: 24,
          borderRadius: "50%",
          p: "8px",
        }}
        aria-label="Função não implementada"
      >
        <Typography variant="body1" color="#6b8693" fontSize="12px">
          F
        </Typography>
      </IconButton>
    </Box>
  );
};
