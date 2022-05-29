import { readFileSync } from "fs"
import { sdk } from "./helper.js"

async function main() {
  const bundleModuleAddress = "0x67C91C41579cc7cc765185877AA76116555793cD" // your bundle module address
  const bundleModule = sdk.getBundleModule(bundleModuleAddress)

  const packModuleAddress = "0xc8212879F71da3f40A09F45927912001AA2025E6" // your pack module address
  const packModule = sdk.getPackModule(packModuleAddress)

  console.log("Getting all NFTs from bundle...")
  const nftsInBundle = await bundleModule.getAll()

  console.log("NFTs in bundle:")
  console.log(nftsInBundle)

  console.log("Creating a pack containing the NFTs from bundle...")
  const created = await packModule.create({
    assetContract: bundleModuleAddress,
    metadata: {
      name: "Fancy NFTs Pack!",
      image: readFileSync("./assets/images/nft-pack.png")
    },
    assets: nftsInBundle.map((nft) => ({
      tokenId: nft.metadata.id,
      amount: nft.supply
    }))
  })

  console.log("Pack created!")
  console.log(created)
}

try {
  await main()
} catch (error) {
  console.error("Error minting the NFTs", error)
  process.exit(1)
}
