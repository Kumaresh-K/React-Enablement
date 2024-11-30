export type NavigationLinkProps = {
  category: string
}

export type FurnitureStructure = {
  id: string
  photo: string
  category: string
  description: string
}

export type FurnitureDataAsProps = {
  furnitureDetails: furnitureStructure[]
}

export type ErrorBoundaryProps = {
  children: ReactNode
}

export type ErrorBoundaryState = {
  hasError: boolean
}

export type FurnitureCategoryCardProps = {
  furniture: furnitureStructure
}

export type PromotionContentProps = {
  headline: string
  tagline: string
}

export type ButtonProps = {
  name: string
  handleClick: () => void
}

export type LoadingScreenProps = {
  className ?: string
}