import React from "react";
import { Box, Typography, Stack, Chip, Badge } from "@mui/material";
import { Pause } from "@mui/icons-material";
import { Product } from "../types";

interface ProductFooterProps {
  product: Product;
}

export const ProductFooter: React.FC<ProductFooterProps> = ({ product }) => {
  return (
    <Box
      bgcolor="#809caa"
      p={2}
      display="flex"
      justifyContent="center"
      alignItems="center"
      gap={3}
    >
      <Stack direction="row" spacing={1} flexWrap="wrap">
        {product.skus?.map((sku) => (
          <Box display="flex" alignItems="center" key={sku.id}>
            <Badge
              badgeContent={sku.size}
              color="primary"
              sx={{
                "& .MuiBadge-badge": {
                  bgcolor: "#809caa",
                  right: -3,
                  top: 3,
                  border: 1,
                },
              }}
            >
              <Chip
                label={sku.stock}
                sx={{
                  bgcolor: "#f5f5f5",
                  color: "#6F97AB",
                  borderRadius: 1,
                  "&:hover": { bgcolor: "#e0e0e0" },
                }}
              />
            </Badge>
          </Box>
        ))}
      </Stack>
      <Box display="flex" alignItems="center" justifyContent="center" gap={1}>
        <Typography color="#fff" sx={{ transform: "rotate(90deg)" }}>
          <Pause />
        </Typography>
        <Box bottom={7} sx={{ position: "relative" }}>
          {product.stock ? (
            <Box display="flex" alignItems="center" flexDirection="column">
              <Typography sx={{ fontSize: "10px" }}>Pack</Typography>
              <Badge>
                <Chip
                  label={product.stock}
                  sx={{
                    bgcolor: "#f5f5f5",
                    color: "#6F97AB",
                    borderRadius: 1,
                    "&:hover": { bgcolor: "#e0e0e0" },
                  }}
                />
              </Badge>
            </Box>
          ) : (
            <Typography sx={{ fontSize: "10px", color: "#fff" }}>
              Sem Estoque
            </Typography>
          )}
        </Box>
      </Box>
    </Box>
  );
};
