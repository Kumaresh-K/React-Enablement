import { FurnitureStructure } from '../types/ShoppingPageProps'

/**
 * Represents a primary button component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.number - amount without comma seperated
 * @returns {string} that represent the number with comma seperated
 */
export const numberWithCommas = (number: string | number): string => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

/**
 * Represents a functionality to merge two orders.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Object} props.prevOrderList - the old order
 * @param {Object} props.newOrderList - the new order
 * @returns {Object} of combination of two orders
 */
export const getCombinedOrderSet = (
  prevOrderList: FurnitureStructure,
  newOrderList: FurnitureStructure
): FurnitureStructure => {
  const combinedOrderList: FurnitureStructure = { ...prevOrderList }

  Object.keys(newOrderList).forEach((id) => {
    if (
      id in combinedOrderList &&
      combinedOrderList[id].quantity &&
      newOrderList[id].quantity
    ) {
      combinedOrderList[id] = {
        ...combinedOrderList[id],
        quantity: combinedOrderList[id].quantity + newOrderList[id].quantity,
      }
    } else {
      combinedOrderList[id] = { ...newOrderList[id] }
    }
  })

  return combinedOrderList
}
