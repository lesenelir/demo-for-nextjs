/**
 *  Server Side Rendering SSR + Multi-layer Dynamic Routing
 */
import RouterButton from "@/components/utils/RouterButton"
import {GetServerSideProps} from "next"

import styles from '../../styles/products.module.css'

interface IProduct {
  id: number,
  brand: string,
  category: string,
  description: string,
  discountPercentage: number,
  images: string[],
  price: number,
  rating: number,
  stock: number,
  thumbnail: string,
  title: string
}

interface IData {
  products: IProduct[],
  total: number,
  skip: number,
  limit: number
}

interface IProps {
  data: IProduct[]
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const response = await fetch('https://dummyjson.com/products')
  const data: IProduct[] = (await response.json() as IData).products

  return {
    props: {
      data
    }
  }
}

function Products(props: IProps) {
  const data = props.data.filter(item => item.id <= 2)
  console.log(data)

  return (
    <div className={styles.box}>
      Products
      <br/>

      {/* It's ok to render a nested list.  Good! */}
      {data.map(item => (
        <div key={item.id} className={styles.card}>
          <h2>{item.brand}</h2>
          <h3>{item.title}</h3>
          <p>${item.price}({item.discountPercentage}%)</p>
          <ul className={styles.imageUl}>
            {item.images.map(url =>
              <li key={url}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={url} alt='phone images' width={50} height={50}/>
              </li>)
            }
          </ul>
        </div>
      ))}
      <RouterButton/>
    </div>
  )
}

export default Products
