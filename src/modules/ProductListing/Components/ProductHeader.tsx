import React, { useState } from "react"
import ProductFilter from "./ProductFilter"
import { sareeFabricFilters, suppllierFilters } from "../utils"
import { ExpendedFilter } from "./ProductFilter"
import { ProductFilterType } from "types"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormHelperText from "@mui/material/FormHelperText"
import FormControl from "@mui/material/FormControl"
import Select, { SelectChangeEvent } from "@mui/material/Select"
import { SortType } from "../../../types"
const ProductFilters: ProductFilterType[] = [
  {
    filterName: "sareeFabric",

    filterValues: sareeFabricFilters,
  },
  {
    filterName: "supplierName",
    filterValues: suppllierFilters,
  },
]

const ProductHeader: React.FC<{ onApplyFilter: (a: String, b: string) => void; onApplySort: (a: SortType) => void; productSortType: SortType }> = ({ onApplyFilter, productSortType, onApplySort }) => {
  const [productFilters, setProductFilters] = useState(ProductFilters)
  const [expendedFilter, setExpendedFilter] = useState<ProductFilterType | null>(null)

  const onExpendFilter = (filter: ProductFilterType) => {
    setExpendedFilter(filter)
  }

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div style={{ display: "flex", gap: "20px", paddingTop: "10px" }}>
          {productFilters.map(({ filterName, filterValues }) => {
            return (
              <div key={filterName as React.Key}>
                <ProductFilter filterValues={filterValues} filterName={filterName} onExpendFilter={onExpendFilter} />
              </div>
            )
          })}
        </div>
        <div>
          <FormControl sx={{ minWidth: 120 }}>
            <InputLabel id="demo-simple-select-helper-label">Sort</InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              label="Age"
              value={(productSortType as unknown) as string}
              onChange={(e: SelectChangeEvent) => {
                onApplySort((e.target.value as unknown) as SortType)
              }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={SortType.PRICE_LOW_TO_HIGH}>Price Low To High</MenuItem>
              <MenuItem value={SortType.PRICE_HIGH_TO_LOW}>Price Hight To Low</MenuItem>

              <MenuItem value={SortType.NAME_ASCENDING}>Name Ascending</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      {expendedFilter && <ExpendedFilter expendedFilter={expendedFilter} onApplyFilter={onApplyFilter} />}
    </div>
  )
}
export default ProductHeader
