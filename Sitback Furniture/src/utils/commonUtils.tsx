import { FurnitureStructure } from '../pages/ShoppingPage/ShoppingPageProps'

export const numberWithCommas = (number: string | number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export const getCombinedOrderSet = (
  prevOrderList: FurnitureStructure,
  newOrderList: FurnitureStructure
): FurnitureStructure => {
  const combinedOrderList: FurnitureStructure = { ...prevOrderList }

  Object.keys(newOrderList).forEach((id) => {
    if (id in combinedOrderList) {
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

