import { readFileSync } from "fs"
import { sdk } from "./helper.js"

async function main() {
  // Paste in the address from when you created the bundle collection module
  const bundleModuleAddress = "0x67C91C41579cc7cc765185877AA76116555793cD"
  const bundleModule = sdk.getBundleModule(bundleModuleAddress)

  console.log("Creating NFT batch...")

  const created = await bundleModule.createAndMintBatch([
    {
      metadata: {
        name: "Quiz NFT 1",
        description: "Lots of tokens",
        image: readFileSync("./assets/images/nft1.png"),
        properties: {
          rarity: "a bit rare",
          fanciness: 10
        }
      },
      supply: 10
    },
    {
      metadata: {
        name: "Quiz NFT 2",
        description: "Going Green with Crypto",
        image: readFileSync("./assets/images/nft2.png"),
        properties: {
          rarity: "super rare",
          fanciness: 9
        }
      },
      supply: 10
    },
    {
      metadata: {
        name: "Quiz NFT 3",
        description: "Tokens in an apartment",
        image: readFileSync("./assets/images/nft3.png"),
        properties: {
          rarity: "not rare",
          fanciness: 5
        }
      },
      supply: 80
    },
    {
      metadata: {
        name: "Quiz NFT 4",
        description: "Ice cold coins",
        image: readFileSync("./assets/images/nft4.png"),
        properties: {
          rarity: "super rare!",
          fanciness: 10
        }
      },
      supply: 5
    },
    {
      metadata: {
        name: "Quiz NFT 5",
        description: "Multi-chain world",
        image: readFileSync("./assets/images/nft5.png"),
        properties: {
          rarity: "not rare!",
          fanciness: 5
        }
      },
      supply: 90
    },
    {
      metadata: {
        name: "Quiz NFT 6",
        description: "A super fancy car!",
        image: readFileSync("./assets/images/nft6.png"),
        properties: {
          rarity: "super rare!",
          fanciness: 10
        }
      },
      supply: 10
    },
    {
      metadata: {
        name: "Quiz NFT 7",
        description: "SOFT!",
        image: readFileSync("./assets/images/nft7.png"),
        properties: {
          rarity: "not so rare!",
          fanciness: 4
        }
      },
      supply: 70
    }
  ])

  console.log("NFTs created!")
  console.log(JSON.stringify(created, null, 2))
}

try {
  await main()
} catch (error) {
  console.error("Error minting the NFTs", error)
  process.exit(1)
}
