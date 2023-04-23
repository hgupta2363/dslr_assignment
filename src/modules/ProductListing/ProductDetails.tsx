import React from "react"
import { Grid } from "@mui/material"
import "./ProductDetails.css"
import { useLocation } from "react-router-dom"
const product = {
  id: 174,
  slug: "saree-black-sequenced-poly-georgette-sequence-work-a6164-buy-174",
  code: "A6164-black-Free_Size",
  productId: 129,
  name: "Black Georgette Saree With Blouse Piece",
  description: '"Color : Black  Fabric : Poly Georgette Blouse : Yes"',
  blouseAttached: true,
  blouseFabric: "poly-georgette",
  sareeFabric: "poly-georgette",
  mrp: 1824,
  listingPrice: 1240,
  discount: 32,
  isActive: true,
  isAvailable: true,
  supplierId: 67,
  supplierName: "Saree Shop",
  availableQty: 139,
  primaryImage: {
    jpegImages: {
      lImage: "https://d2mg89328eg065.cloudfront.net/optimized_media/300/l_1A3198H.jpeg",
      mImage: "https://d2mg89328eg065.cloudfront.net/optimized_media/300/m_1A3198H.jpeg",
      sImage: "https://d2mg89328eg065.cloudfront.net/optimized_media/300/s_1A3198H.jpeg",
      xsImage: "https://d2mg89328eg065.cloudfront.net/optimized_media/300/xs_1A3198H.jpeg",
    },
    webpImages: {
      lImage: "https://d2mg89328eg065.cloudfront.net/optimized_media/300/l_1A3198H.webp",
      mImage: "https://d2mg89328eg065.cloudfront.net/optimized_media/300/m_1A3198H.webp",
      sImage: "https://d2mg89328eg065.cloudfront.net/optimized_media/300/s_1A3198H.webp",
      xsImage: "https://d2mg89328eg065.cloudfront.net/optimized_media/300/xs_1A3198H.webp",
    },
  },
}
export default function ProductDetails() {
  console.log("iajcajnc")
  const location = useLocation()
  const product = location.state.product

  return (
    <div className="full_container">
      <Grid container spacing={1}>
        <Grid item md={6} xs={12} sm={12}>
          <img src={product.primaryImage.webpImages.lImage} alt="dd" style={{ width: "100%", maxWidth: "350px", maxHeight: "450px" }} />
        </Grid>
        <Grid item md={6} xs={12} sm={12} sx={{ marginTop: "10px" }}>
          <p>{product.name}</p>
          <div style={{ display: "flex", gap: "10px" }}>
            <p style={{ fontSize: "20px", fontWeight: "800", paddingTop: "2px" }}>{`Rs. ${product?.mrp}`}</p>
            <p style={{ fontSize: "18px", fontWeight: "400", paddingTop: "2px", textDecoration: "line-through;" }}>{`Rs. ${product?.listingPrice}`}</p>
            <p style={{ fontSize: "18px", fontWeight: "800", paddingTop: "2px", color: "orange" }}>{`${product?.discount}%`}</p>
          </div>
          <div className={"button_wrapper"}>
            <button className={"cart_button"}> Add To Cart</button>
            <button className="whislist_button">Whislist</button>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}
