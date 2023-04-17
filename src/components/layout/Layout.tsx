import React from "react"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"

interface IProps {
  children: React.ReactNode
}

function Layout(props: IProps) {
  return (
    <>
      <Navbar/>
      <main>{props.children}</main>
      <Footer/>
    </>
  )
}

export default Layout
