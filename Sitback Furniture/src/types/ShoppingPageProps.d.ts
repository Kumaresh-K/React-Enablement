export type FurnitureAttributes = {
  description: string
  guarantee: number
  id: number | string
  name: string
  photo: string
  price: string
  rating: number
  quantity?: number
}

export type FurnitureStructure = {
  [id: number | string]: FurnitureAttributes
}

export type FurnitureCardProps = {
  furniture: FurnitureAttributes
}

export type FurnitureListProps = {
  furnitures: FurnitureStructure
}

export type GuaranteeBadgeProps = {
  years: number
}

export type ProductPriceProps = {
  currencySymbol: string
  price: string | number
}

export type PaymentSectionProps = {
  amount: string | number
}

export type ProductCardQuantityProps = {
  furnitureID: number | string
}

export type ProductPanelCardProps = {
  furniture: FurnitureAttributes
}
