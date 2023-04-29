import {getUserFromRequest} from "@/utils/verify"
import {GetServerSideProps, GetServerSidePropsContext} from "next"

import styles from '../../../styles/app.module.css'

interface IProps {
  user: {
    name: string
  }
}

export const getServerSideProps: GetServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const user = await getUserFromRequest(ctx.req)
  if (!user) {
    return {
      redirect: {
        permanent: false,
        destination: '/login'
      }
    }
  }

  return {
    props: {
      user: {
        name: user.name
      }
    }
  }
}

// 展示用户信息页，该页面只能被已登陆的用户访问，如果未被登陆跳转/login
function UserPage(props: IProps) {
  const {user} = props

  return (
    <div className={styles.box}>
      <h2>Hello, {user.name}</h2>
    </div>
  )
}

export default UserPage
