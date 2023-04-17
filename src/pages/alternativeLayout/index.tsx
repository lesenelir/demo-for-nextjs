/**
 * use the alternative layout in one of the pages ==> change the default layout
 */
import {ReactElement} from "react"
import {NextPageWithLayout} from "@/pages/_app"
import LayoutWithSidebar from "@/components/layout/LayoutWithSidebar"
import RouterButton from "@/components/utils/RouterButton"

import styles from '../../styles/alternativeLayout.module.css'

// function AlternativeLayoutPage() {
//   return (
//     <div className={styles.box}>
//       <h3>Page with a side bar</h3>
//       <p>Test {'Alternative Layout '} feature</p>
//     </div>
//   )
// }

const AlternativeLayoutPage: NextPageWithLayout = () => {
  return (
    <div className={styles.box}>
      <h3>Page with a side bar</h3>
      <p>Test {'Alternative Layout '} feature</p>
      <RouterButton/>
    </div>
  )
}

export default AlternativeLayoutPage

// Define getLayout function. The parameter page is AlternativeLayoutPage.
AlternativeLayoutPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <LayoutWithSidebar>
      {page}
    </LayoutWithSidebar>
  )
}
