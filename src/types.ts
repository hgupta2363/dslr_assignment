export type ProductAppliedFilterType = {
  filterType: string
  appliedfilterValues: string[]
}
export type ProductFilterType = {
  filterName: String | string
  filterValues: string[]
}

export type ProductType = {
  id: number
  slug: string
  code: string
  productId: number
  name: string
  description: string
  blouseAttached: boolean
  blouseFabric: string
  sareeFabric: string
  mrp: number
  listingPrice: number
  discount: number
  isActive: boolean
  isAvailable: boolean
  supplierId: number
  supplierName: string
  availableQty: number
  primaryImage: {
    jpegImages: {
      mImage: string
      sImage: string
      xsImage: string
    }
    webpImages: {
      mImage: string
      sImage: string
      xsImage: string
    }
  }
}
export enum SortType {
  PRICE_HIGH_TO_LOW,
  PRICE_LOW_TO_HIGH,
  RATINGS_HIGH_TO_LOW,
  NAME_ASCENDING,
  NONE,
}
