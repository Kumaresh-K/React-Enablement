export const getFurnitureCategories = (furnitureDetails: any) => {
  return furnitureDetails.map((furniture: any) => furniture.category)
}
