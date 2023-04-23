import React from "react"
import { ProductType } from "types"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
type ProductCardTypes = {
  product: ProductType
}
export const ProductCard: React.FC<ProductCardTypes> = ({ product }) => {
  return (
    <Card sx={{ boxShadow: "0px 0px 0px 0px white" }}>
      <CardMedia sx={{ height: 300, maxWidth: 380 }} image={product?.primaryImage?.jpegImages?.sImage} title="green iguana" />
      <CardContent sx={{ paddingTop: "5px" }}>
        <Typography variant="body2" sx={{ fontSize: "16px", fontWeight: "600" }}>
          {product?.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ fontSize: "16px", fontWeight: "800", paddingTop: "2px" }}>
          {product?.sareeFabric}
        </Typography>
        <div style={{ display: "flex", gap: "10px" }}>
          <Typography variant="body2" sx={{ fontSize: "16px", fontWeight: "800", paddingTop: "2px" }}>
            {`Rs. ${product?.mrp}`}
          </Typography>
          <Typography variant="body2" sx={{ fontSize: "14px", fontWeight: "400", paddingTop: "2px", textDecoration: "line-through;" }}>
            {`Rs. ${product?.listingPrice}`}
          </Typography>
          <Typography variant="body2" sx={{ fontSize: "14px", fontWeight: "800", paddingTop: "2px", color: "orange" }}>
            {`${product?.discount}%`}
          </Typography>
        </div>
      </CardContent>
    </Card>
  )
}
export default ProductCard
