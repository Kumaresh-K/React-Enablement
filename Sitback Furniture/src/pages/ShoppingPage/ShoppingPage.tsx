import { useNavigate, useParams } from 'react-router-dom'
import styles from './ShoppingPage.module.scss'
import FurnitureList from '../../components/FurnitureList/FurnitureList'
import useAPI from '../../hooks/useAPI'
import LoadingScreen from '../../components/LoadingScreen/LoadingScreen'
import PageDown from '../../components/PageDown/PageDown'

const ShoppingPage = () => {
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
    <main>
      <FurnitureList furnitures={data} />
    </main>
  )
}

export default ShoppingPage
