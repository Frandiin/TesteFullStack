import React from "react";
import { Box, Button, Typography, Stack } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import SearchIcon from "@mui/icons-material/Search";
import InfoIcon from "@mui/icons-material/Info";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import { Product } from "../types";
import { getImageUrl } from "../services/api";

interface ProductControlsProps {
  product: Product;
  currentValue: number;
  previousValue: number;
  accumulatedValue: number;
  onIncrement: () => void;
  onDecrement: () => void;
  onOpenModal: () => void;
}

export const ProductControls: React.FC<ProductControlsProps> = ({
  product,
  currentValue,
  previousValue,
  accumulatedValue,
  onIncrement,
  onDecrement,
  onOpenModal,
}) => {
  const sortedImages = [...product.images].sort((a, b) => a.order - b.order);

  return (
    <Box sx={{ borderTop: 3, borderColor: "#809caa" }}>
      <Box
        display="flex"
        justifyContent="center"
        gap={2}
        alignItems="center"
        py={2}
      >
        <Button
          onClick={onOpenModal}
          sx={{
            border: 1,
            borderColor: "#809caa",
            bgcolor: "#809caa",
            borderRadius: "50%",
            p: 2,
            width: 30,
            height: 30,
            minWidth: 0,
            minHeight: 0,
            color: "white",
          }}
          aria-label="Informações do produto"
        >
          <InfoIcon />
        </Button>
        <Button
          sx={{
            border: 1,
            borderColor: "#809caa",
            bgcolor: "#809caa",
            borderRadius: "50%",
            p: 2,
            width: 30,
            height: 30,
            minWidth: 0,
            minHeight: 0,
            color: "white",
          }}
          aria-label="Pesquisar"
        >
          <SearchIcon />
        </Button>
        <Stack
          direction="row"
          spacing={1}
          sx={{
            overflowX: "auto",
            py: 1,
            px: 2,
            "&::-webkit-scrollbar": { height: 6 },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#809caa",
              borderRadius: 3,
            },
          }}
        >
          {sortedImages.map((image, index) => (
            <Box
              key={image.id}
              sx={{
                width: 60,
                height: 60,
                flexShrink: 0,
                cursor: "pointer",
                border: "1px solid #e0e0e0",
                borderRadius: 1,
                overflow: "hidden",
              }}
            >
              <img
                src={getImageUrl(image.company_key || "2007", image.path)}
                alt={`${product.name} - ${index + 1}`}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Box>
          ))}
        </Stack>
        <Button
          sx={{
            border: 1,
            borderColor: "#809caa",
            bgcolor: "#809caa",
            borderRadius: "50%",
            p: 2,
            width: 30,
            height: 30,
            minWidth: 0,
            minHeight: 0,
            color: "white",
          }}
          aria-label="Adicionar ao carrinho"
        >
          <LocalGroceryStoreIcon />
        </Button>
      </Box>
      <Box sx={{ borderTop: 1, borderColor: "#809caa", mx: 2 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: { xs: "space-between", md: "space-around" },
            gap: 2,
            px: 2,
            mt: 2,
            alignItems: "center",
          }}
        >
          <Button
            sx={{
              border: 1,
              borderColor: "#809caa",
              bgcolor: "#809caa",
              borderRadius: "50%",
              p: 2,
              width: 30,
              height: 30,
              minWidth: 0,
              minHeight: 0,
              color: "white",
            }}
            aria-label="Ordenar"
          >
            <SwapVertIcon />
          </Button>
          <Typography noWrap sx={{ fontWeight: "bold", fontSize: "14px" }}>
            {product.name}
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography component="span">REF:</Typography>
            <Typography
              noWrap
              color="text.secondary"
              sx={{ fontSize: "13.34px" }}
            >
              {product.reference}
            </Typography>
          </Box>
          <Typography
            sx={{ color: "#809caa", fontWeight: "bold", fontSize: "2.2vh" }}
          >
            <span style={{ fontSize: "10.34px" }}>R$</span>{" "}
            {product.price?.toFixed(2) ?? "N/A"}
          </Typography>
        </Box>
      </Box>
      <Box display="flex" justifyContent="center" gap={2} my={2}>
        <Box textAlign="center">
          <Typography fontWeight="bold">Atual</Typography>
          <Typography>R${currentValue.toFixed(2)}</Typography>
        </Box>
        <Box display="flex" alignItems="center" gap={1}>
          <Button
            onClick={onDecrement}
            sx={{
              border: 1,
              borderColor: "#809caa",
              bgcolor: "#809caa",
              borderRadius: "50%",
              p: 2,
              width: 30,
              height: 30,
              minWidth: 0,
              minHeight: 0,
              color: "white",
            }}
            aria-label="Diminuir quantidade"
          >
            <RemoveIcon />
          </Button>
          <Box
            sx={{
              border: 1,
              borderColor: "#809caa",
              p: 1,
              minWidth: 20,
              minHeight: 40,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography>{previousValue}</Typography>
          </Box>
          <Button
            onClick={onIncrement}
            sx={{
              border: 1,
              borderColor: "#809caa",
              bgcolor: "#809caa",
              borderRadius: "50%",
              p: 2,
              width: 30,
              height: 30,
              minWidth: 0,
              minHeight: 0,
              color: "white",
            }}
            aria-label="Aumentar quantidade"
          >
            <AddIcon />
          </Button>
        </Box>
        <Box textAlign="center">
          <Typography fontWeight="bold">Acumulado</Typography>
          <Typography>R${accumulatedValue.toFixed(2)}</Typography>
        </Box>
      </Box>
    </Box>
  );
};
