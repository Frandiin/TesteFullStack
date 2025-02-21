import React, { useState } from "react";
import { Box, IconButton } from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { Product } from "../types";
import { getImageUrl } from "../services/api";

interface ProductGalleryProps {
  product: Product;
}

export const ProductGallery: React.FC<ProductGalleryProps> = ({ product }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const sortedImages = [...product.images].sort((a, b) => a.order - b.order);
  const currentImage = sortedImages[currentImageIndex];
  const imageUrl = currentImage
    ? getImageUrl(currentImage.company_key || "2007", currentImage.path)
    : "";

  const handlePrevImage = () =>
    setCurrentImageIndex((prev) =>
      prev > 0 ? prev - 1 : sortedImages.length - 1
    );
  const handleNextImage = () =>
    setCurrentImageIndex((prev) =>
      prev < sortedImages.length - 1 ? prev + 1 : 0
    );

  return (
    <Box
      sx={{
        bgcolor: "#fff",
        p: 2,
        borderRadius: 1,
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: "320px", md: "100%" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={imageUrl}
          alt={product.name}
          style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
        />
        <Box
          sx={{
            position: "absolute",
            top: 150,
            left: 0,
            right: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: 2,
          }}
        >
          <IconButton
            sx={{
              bgcolor: "#809caa",
              color: "white",
              "&:hover": { bgcolor: "#6b8693" },
              width: 40,
              height: 40,
            }}
            onClick={handlePrevImage}
            aria-label="Imagem anterior"
          >
            <KeyboardArrowLeft />
          </IconButton>
          <IconButton
            sx={{
              bgcolor: "#809caa",
              color: "white",
              "&:hover": { bgcolor: "#6b8693" },
              width: 40,
              height: 40,
            }}
            onClick={handleNextImage}
            aria-label="Próxima imagem"
          >
            <KeyboardArrowRight />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};
