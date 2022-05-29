import { Pack } from "@thirdweb-dev/sdk"
import { useState } from "react"
import toast from "react-hot-toast"
import PrimaryButton from "../components/PrimaryButton"
import NFT from "./Nft"

type Props = {
  packModule: Pack
  afterOpen: () => Promise<void>
}

export default function OpenButton({ packModule, afterOpen }: Props) {
  const [opening, setOpening] = useState(false)

  const openPack = async () => {
    setOpening(true)
    try {
      const nftMetadata = await packModule.open("0")
      setOpening(false)
      toast.success(<NFT metadata={nftMetadata[0]} />, {
        style: {
          minWidth: "300px"
        },
        duration: 5000
      })
      await afterOpen()
    } catch (err) {
      console.error(err)
      setOpening(false)
    }
  }

  return (
    <PrimaryButton onClick={openPack} disabled={opening}>
      {opening ? "Opening..." : "Open!"}
    </PrimaryButton>
  )
}
