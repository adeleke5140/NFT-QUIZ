/* eslint-disable @next/next/no-img-element */
import type { NFTMetadata } from "@thirdweb-dev/sdk"

// type Props = {
//   metadata: NFTMetadata
// }

export default function NFT({ metadata }: any) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <p style={{ fontWeight: "600" }}>{metadata.name}</p>
      <img
        style={{ objectFit: "cover", height: "9rem", width: "12rem" }}
        src={metadata.image}
        alt={metadata.name}
      />
    </div>
  )
}
