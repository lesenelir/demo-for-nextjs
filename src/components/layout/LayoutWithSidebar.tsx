import React from "react"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"

interface IProps {
  children: React.ReactNode
}

// Alternative Layout Component ( Second choice Layout Component )
function LayoutWithSidebar(props: IProps) {
  const {children} = props

  return (
    <>
      <Navbar/>
      <Navbar/>
      <aside>Sidebar</aside>
      <main>{children}</main>
      <Footer/>
      <Footer/>
    </>
  )
}

export default LayoutWithSidebar
