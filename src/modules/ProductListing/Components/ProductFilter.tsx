import React from "react"
import { sareeFabricFilters, suppllierFilters } from "../utils"
import "./ProductFilter.css"
import { useState } from "react"
import Checkbox from "@mui/material/Checkbox"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import { Grid } from "@mui/material"
import { ProductFilterType } from "types"
type ProductFilterPropType = {
  filterName: String
  filterValues: string[]
  onExpendFilter: (a: ProductFilterType) => void
}
type ExpendedFilterType = {
  expendedFilter: ProductFilterType
  onApplyFilter: (a: String, b: string) => void
}
export const ExpendedFilter: React.FC<ExpendedFilterType> = ({ expendedFilter, onApplyFilter }) => (
  <Grid container spacing={4} sx={{ marginTop: "20px" }}>
    {expendedFilter.filterValues.map((value) => {
      return (
        <Grid item md={2} xs={6} sm={3} key={value}>
          <div className="filter_value" onClick={() => onApplyFilter(expendedFilter.filterName, value)}>
            <Checkbox />
            <div style={{ paddingTop: "10px" }}>
              <p>{value}</p>
            </div>
          </div>
        </Grid>
      )
    })}
  </Grid>
)

const ProductFilter: React.FC<ProductFilterPropType> = ({ filterName, filterValues, onExpendFilter }) => {
  return (
    <div>
      <div className="product_filter" onClick={() => onExpendFilter({ filterName, filterValues })}>
        <p>
          {filterName}
          <span>
            <KeyboardArrowDownIcon />
          </span>
        </p>
      </div>
    </div>
  )
}
export default ProductFilter
