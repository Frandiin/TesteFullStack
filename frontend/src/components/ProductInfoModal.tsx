import React from "react";
import { Modal, Paper, Typography, Button, Box } from "@mui/material";
import { Product } from "../types";

interface ProductInfoModalProps {
  open: boolean;
  onClose: () => void;
  product: Product;
}

export const ProductInfoModal: React.FC<ProductInfoModalProps> = ({
  open,
  onClose,
  product,
}) => {
  return (
    <Modal open={open} onClose={onClose} aria-labelledby="product-info-modal">
      <Paper
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: "90%", md: 400 },
          bgcolor: "white",
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
        }}
      >
        <Typography
          id="product-info-modal"
          variant="h6"
          component="h2"
          sx={{ mb: 2, color: "#809caa" }}
        >
          Informações do Produto
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Box>
            <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
              Nome:
            </Typography>
            <Typography>{product.name}</Typography>
          </Box>
          <Box>
            <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
              Referência:
            </Typography>
            <Typography>{product.reference}</Typography>
          </Box>
          <Box>
            <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
              Marca:
            </Typography>
            <Typography>{product.brand}</Typography>
          </Box>
          <Box>
            <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
              Categoria:
            </Typography>
            <Typography>{product.category ?? "N/A"}</Typography>
          </Box>
          <Box>
            <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
              Gênero:
            </Typography>
            <Typography>{product.gender ?? "N/A"}</Typography>
          </Box>
        </Box>
        <Button
          onClick={onClose}
          variant="contained"
          sx={{ mt: 3, bgcolor: "#809caa", "&:hover": { bgcolor: "#6b8693" } }}
        >
          Fechar
        </Button>
      </Paper>
    </Modal>
  );
};
