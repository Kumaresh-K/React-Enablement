import { FurnitureCategoryStructure } from '../pages/HomePage/HomePageProps'

export const getFurnitureCategories = (
  furnitureDetails: FurnitureCategoryStructure[]
) => {
  return furnitureDetails.map(
    (furniture: FurnitureCategoryStructure) => furniture.id
  )
}