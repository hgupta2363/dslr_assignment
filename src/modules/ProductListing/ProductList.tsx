import React, { useState, useEffect } from "react"
import { collections } from "../../data/collection"
import { Grid } from "@mui/material"
import { ProductType, ProductAppliedFilterType } from "types"
import ProductCard from "./Components/ProductCard"
import ProductHeader from "./Components/ProductHeader"
import { getProducts } from "./utils"
import { SortType } from "types"
import { useHistory } from "react-router-dom"
export default function ProductList() {
  const [productAppliedFilters, setProductAppliedFilters] = useState<ProductAppliedFilterType[]>([
    { filterType: "sareeFabric", appliedfilterValues: [] },
    { filterType: "supplierName", appliedfilterValues: [] },
  ])
  const [productSortType, setProductSortType] = useState<SortType>(SortType.NONE)
  const [products, setProducts] = useState<ProductType[]>([])
  const history = useHistory()

  useEffect(() => {
    setProducts(getProducts(productAppliedFilters, productSortType))
  }, [productAppliedFilters, productSortType])
  const onApplyFilter = (filterType: any, appliedFilterValue: string) => {
    let updateAppliedFilters = [...productAppliedFilters]
    updateAppliedFilters.forEach((filter) => {
      if (filter.filterType === filterType) {
        if (filter.appliedfilterValues.includes(appliedFilterValue)) {
          let index = filter.appliedfilterValues.indexOf(appliedFilterValue)
          filter.appliedfilterValues.splice(index, 1)
        } else filter.appliedfilterValues = [...filter.appliedfilterValues, appliedFilterValue]
      }
    })

    setProductAppliedFilters(updateAppliedFilters)
  }
  const onApplySort = (sortType: SortType) => {
    setProductSortType(sortType)
  }

  return (
    <div style={{ padding: "20px 20px 20px 20px" }}>
      <ProductHeader onApplyFilter={onApplyFilter} productSortType={productSortType} onApplySort={onApplySort} />
      <Grid container spacing={4} sx={{ marginTop: "20px" }}>
        {products.map((product: ProductType) => {
          return (
            <Grid item md={2} xs={6} sm={3} key={product?.id} onClick={() => history.push("/productDetails", { product })}>
              <ProductCard product={product} />
            </Grid>
          )
        })}
      </Grid>
    </div>
  )
}
