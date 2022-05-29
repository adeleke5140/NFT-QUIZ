import "../styles/globals.css"
import type { AppProps } from "next/app"
import Layout from "../components/Layout"
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react"
import { Toaster } from "react-hot-toast"

function MyApp({ Component, pageProps }: AppProps) {
  const activeChainId = ChainId.Mumbai

  return (
    <>
      <Toaster />
      <ThirdwebProvider desiredChainId={activeChainId}>
        <Layout title={pageProps.title}>
          <Component {...pageProps} />
        </Layout>
      </ThirdwebProvider>
    </>
  )
}

export default MyApp
