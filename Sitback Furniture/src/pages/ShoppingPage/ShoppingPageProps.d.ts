export type FurnitureStructure = {
  description: string
  guarantee: number
  id: number
  name: string
  photo: string
  price: string
  rating: number
}

export type FurnitureCardProps = {
  furniture: FurnitureStructure
}

export type FurnitureListProps = {
  furnitures: FurnitureStructure[]
}

export type GuaranteeBadgeProps = {
  years: number
}

export type ProductPriceProps = {
  currencySymbol: string
  price: string | number
}

export type ProductPanelCardProps = {
  id: number
  name: string
  photo: string
  price: string
}