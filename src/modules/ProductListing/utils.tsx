import { collections } from "../../data/collection"

import { ProductAppliedFilterType, SortType } from "types"
export let sareeFabricFilters: string[] = []
export let suppllierFilters: string[] = []
for (let product of collections) {
  if (!sareeFabricFilters.includes(product?.sareeFabric)) {
    sareeFabricFilters.push(product?.sareeFabric)
  }
}
for (let product of collections) {
  if (!suppllierFilters.includes(product?.supplierName)) {
    suppllierFilters.push(product?.supplierName)
  }
}
export const getProducts = (appliedFilter: ProductAppliedFilterType[], sortType: SortType) => {
  let filteredProducts = [...collections]
  appliedFilter.map((filter) => {
    if (filter.appliedfilterValues.length !== 0)
      filteredProducts = filteredProducts.filter((product: any) => {
        return filter.appliedfilterValues.includes(product[filter.filterType])
      })
  })
  switch (sortType) {
    case SortType.PRICE_HIGH_TO_LOW: {
      filteredProducts.sort((product1, product2) => product2.mrp - product1.mrp)
      return filteredProducts
    }
    case SortType.PRICE_LOW_TO_HIGH: {
      filteredProducts.sort((product1, product2) => product1.mrp - product2.mrp)
      return filteredProducts
    }
    case SortType.NAME_ASCENDING: {
      filteredProducts.sort((product1, product2) => {
        let lName1 = product1.name.toLowerCase()
        let lName2 = product2.name.toLowerCase()

        if (lName1 < lName2) {
          return -1
        }
        if (lName1 > lName2) {
          return 1
        }
        return 0
      })
      return filteredProducts
    }
  }
  return filteredProducts
}
