import React from "react"
import Footer from "./Footer"
import Navbar from "./Navbar"

type Props = {
  title: string
}
export default function Layout({
  children,
  title
}: React.PropsWithChildren<Props>) {
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
