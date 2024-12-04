import { useState, useEffect } from 'react'
import { PANELS } from '../../constants'
import styles from './PanelHeader.module.scss'
import classNames from 'classnames'

const PanelHeader = () => {
  const [panel, setPanel] = useState('cart')

  const panelHeaders = PANELS.map((tab, key) => {
    return (
      <span
        onClick={() => setPanel(tab.id)}
        key={key}
        className={panel === tab.id ? styles.activePanel : styles.panelHeader}
      >
        {tab.name}
      </span>
    )
  })

  useEffect(() => {
    console.log(panel)
  }, [panel])

  return <div className={styles.shoppingPanel}>{panelHeaders}</div>
}

export default PanelHeader
