/* eslint-disable react-hooks/exhaustive-deps */
import Head from "next/head"
import { useAddress, useSigner } from "@thirdweb-dev/react"
import { ThirdwebSDK } from "@thirdweb-dev/sdk"
import type { PackMetadataWithBalance } from "@thirdweb-dev/sdk"
import { useEffect, useState } from "react"
import { packAddress } from "../lib/contractAddresses"
import NFT from "../components/Nft"

import OpenButton from "../components/OpenButton"

export function getStaticProps() {
  return {
    props: {
      title: "Winner's Spot"
    }
  }
}

export default function Lounge() {
  const address = useAddress()
  const signer = useSigner()
  const [loading, setLoading] = useState(false)
  const [packNfts, setPackNfts] = useState<PackMetadataWithBalance[]>([])

  const sdk = new ThirdwebSDK("https://matic-mumbai.chainstacklabs.com")
  const packModule = sdk.getPack(packAddress)

  async function getNfts() {
    const fetchedPackNfts = await packModule.getOwned(address)
    console.log(fetchedPackNfts)
    setPackNfts(fetchedPackNfts)
  }

  async function getNftsWithLoading() {
    setLoading(true)
    try {
      await getNfts()
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (address) {
      getNftsWithLoading()
    }
  }, [address])

  useEffect(() => {
    if (signer) {
      sdk.updateSignerOrProvider(signer)
      sdk.getSigner()
      sdk.addListener
      sdk.deployer
      sdk.emit
      sdk.eventNames
      sdk.getProvider()
      sdk.getSignerOrProvider()
      sdk.getSigner()
      sdk.getPublisher()

      // signer.sendTransaction(packModule)
      // signer.signTransaction(packModule)
      // signer.signMessage("Confirm the transaction")
    }
  }, [signer])
  if (!address) {
    return (
      <p className="text-red-800">
        Please connect your wallet to access the lounge!
      </p>
    )
  }

  if (loading) {
    return (
      <svg
        className="animate-spin h-10 w-10 text-green-600"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
        <span className="sr-only">Loading</span>
      </svg>
    )
  }

  if (packNfts.length === 0) {
    return <p>You need to own some NFTs to access the lounge!</p>
  }

  return (
    <div>
      <Head>
        <title>Winner&apos;s lounge</title>
      </Head>
      <div className="flex flex-col gap-8">
        {packNfts.length > 0 && (
          <div>
            <h2
              style={{
                color: "var(--primary-color1)",
                fontFamily: "var(--font-family1)",
                fontWeight: "600"
              }}
              className="text-4xl font-bold"
            >
              Your Packs
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 mt-4 gap-2">
              <div className="border border-green-500 rounded-lg p-4">
                <NFT metadata={packNfts[0].metadata} />
                <p className="text-gray-800">
                  Balance: {packNfts[0].ownedByAddress.toString()}
                </p>
                <OpenButton packModule={packModule} afterOpen={getNfts} />
              </div>
            </div>
          </div>
        )}

        <div>
          <h2
            className="text-4xl font-bold"
            style={{
              color: "var(--primary-color1)",
              fontFamily: "var(--font-family1)",
              fontWeight: "600"
            }}
          >
            Some secret content!
          </h2>
          <p>This content is only available to users with NFTs! 🤫</p>
          <p>You can put anything you like here!</p>
        </div>
      </div>
    </div>
  )
}
