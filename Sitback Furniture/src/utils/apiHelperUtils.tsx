import { FurnitureCategoryStructure } from '../types/HomePageProps'

/**
 * Provide a different categories of furnitures.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.furnitureDetails - A different categories of furnitures
 * @returns {Array} of funitures id number
 */
export const getFurnitureCategories = (
  furnitureDetails: FurnitureCategoryStructure[]
): Array<any> => {
  return furnitureDetails.map(
    (furniture: FurnitureCategoryStructure) => furniture.id
  )
}
