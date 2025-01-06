import { useNavigate, useParams } from 'react-router-dom'
import FurnitureList from '../../components/FurnitureList/FurnitureList'
import useAPI from '../../hooks/useAPI'
import LoadingScreen from '../../components/LoadingScreen/LoadingScreen'
import PageDown from '../../components/PageDown/PageDown'
import ShoppingContext from './ShoppingContext'

/**
 * Represents the shopping page.
 *
 * @component
 * @returns {React.ReactElement} the home page element.
 */

const ShoppingPage = (): React.ReactElement | undefined => {
  const param = useParams()
  const navigate = useNavigate()
  const { data, loading, error } = useAPI(
    `products?category=${param.categoryId}`
  )

  if (loading) return <LoadingScreen className='verticalHorizontalCenter' />
  if (error) return <PageDown />
  if (data === null) {
    navigate('/')
    return
  }

  return (
    <ShoppingContext>
      <FurnitureList furnitures={data} />
    </ShoppingContext>
  )
}

export default ShoppingPage
