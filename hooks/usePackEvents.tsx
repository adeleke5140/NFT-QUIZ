/* eslint-disable react-hooks/exhaustive-deps */
import { ethers } from "ethers"
import type { ContractInterface } from "ethers"
import { useEffect } from "react"
import { packAddress } from "../lib/contractAddresses"
import packABI from "../utils/PackABI.json"
import { useAddress, useSigner } from "@thirdweb-dev/react"
import { toast } from "react-hot-toast"
import Link from "next/link"

export default function usePackEvents() {
  const address = useAddress()
  const provider = useSigner()

  useEffect(() => {
    if (provider) {
      const abi = packABI as ContractInterface
      const packContract = new ethers.Contract(packAddress, abi, provider)
      packContract.on("TransferSingle", (_operator, _from, to, _id, _value) => {
        if (to === address) {
          toast.success(
            <div style={{ display: "flex", flexDirection: "column", gap: "2" }}>
              <p style={{ color: "green" }}>
                Congratulations! You were awarded a fancy NFT pack!
              </p>
              <p>
                View and open it in the{" "}
                <Link href="/lounge">
                  <a style={{ fontWeight: "600" }}>lounge</a>
                </Link>
              </p>
            </div>,
            {
              duration: 5000
            }
          )
        }
      })
    }
  }, [!!provider])
}
