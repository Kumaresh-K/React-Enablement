import { useContext } from 'react'
import { PANELS } from '../../constants'
import { CustomerShoppingContext } from '../../pages/ShoppingPage/ShoppingContext'
import styles from './PanelHeader.module.scss'

/**
 * Represents a panel header component.
 *
 * @component
 * @returns {React.ReactElement} the panels for cart and wishlist.
 */

const PanelHeader = (): React.ReactElement => {
  const { selectedTab, setSelectedTab } = useContext(CustomerShoppingContext)

  const panelHeaders = PANELS.map((tab, key) => {
    return (
      <span
        onClick={() => setSelectedTab(tab.id)}
        key={key}
        className={
          selectedTab == tab.id ? styles.activePanel : styles.panelHeader
        }
      >
        {tab.name}
      </span>
    )
  })

  return <div className={styles.shoppingPanel}>{panelHeaders}</div>
}

export default PanelHeader
