import React from "react"
import Footer from "./Footer"
import Navbar from "./Navbar"
import usePackEvents from "../hooks/usePackEvents"

type Props = {
  title: string
}
export default function Layout({
  children,
  title
}: React.PropsWithChildren<Props>) {
  usePackEvents()
  return (
    <div className="layout">
      <Navbar />
      <main className="layout-main">
        <div className="layout-container">
          <h1 className="main-title">{title}</h1>
          {children}
        </div>
      </main>
      <Footer />
    </div>
  )
}
