/**
 *  Server Side Rendering SSR
 *
 *
 */
import RouterButton from "@/components/utils/RouterButton"

import styles from '../../styles/products.module.css'

function Products() {
  return (
    <div className={styles.box}>
      Products
      <br/>

      <RouterButton/>
    </div>
  )
}

export default Products
