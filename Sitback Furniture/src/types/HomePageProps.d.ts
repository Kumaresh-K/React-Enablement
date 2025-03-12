export type NavigationLinkProps = {
  category: string
}

export type FurnitureCategoryStructure = {
  id: string
  photo: string
  category: string
  description: string
}

export type FurnitureDataAsProps = {
  furnitureDetails: FurnitureCategoryStructure[]
}

export type ErrorBoundaryProps = {
  children: ReactNode
}

export type ErrorBoundaryState = {
  hasError: boolean
}

export type FurnitureCategoryCardProps = {
  furniture: FurnitureCategoryStructure
}

export type PromotionContentProps = {
  headline: string
  tagline: string
  customStyle ?: string
}

export type ButtonProps = {
  name: string
  handleClick: () => void
  secondary?: boolean
}

export type LoadingScreenProps = {
  className?: string
}
