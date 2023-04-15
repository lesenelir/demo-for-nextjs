import RouterButton from "@/components/utils/RouterButton"

import styles from '../../styles/about.module.css'

// localhost:3000/about  --->  file-based routing
function About() {
  return (
    <div className={styles.box}>
      About
      <RouterButton/>
    </div>
  )
}

export default About
