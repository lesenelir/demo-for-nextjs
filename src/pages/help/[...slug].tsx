/**
 * Multi-layer Dynamic Route
 *
 *  [...slug] 不捕获 /help
 *  [[...slug]] 可以包括/help
 *
 * /help/when/what/1          {slug: ['when', 'what', '1']}
 * /help/web/dev/react/2      {slug: ['web', 'dev', 'react', '2']}
 */
import {NextRouter, useRouter} from "next/router"

import styles from '../../styles/help.module.css'

function Help() {
  const router: NextRouter = useRouter()
  console.log(router.query)

  return (
    <div className={styles.box}>
      Help Page
      <br/>

      <ul>
        {(router.query.slug as string[])?.map(item => <li key={item}>{item}</li>)}
      </ul>
    </div>
  )
}

export default Help
