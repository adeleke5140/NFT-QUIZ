import { ethers } from "ethers"
import { sdk } from "./helper.js"

async function main() {
  const packModuleAddress = "0xc8212879F71da3f40A09F45927912001AA2025E6" // your pack module address
  const packModule = sdk.getPackModule(packModuleAddress)

  console.log("Depositing link...")

  // LINK uses 18 decimals, same as Eth. So this gives us the amount to use for 2 LINK
  const amount = ethers.utils.parseEther("2")

  await packModule.depositLink(amount)
  console.log("Deposited!")

  const balance = await packModule.getLinkBalance()
  console.log(balance)
}

try {
  await main()
} catch (error) {
  console.error("Error depositing the LINK", error)
  process.exit(1)
}
