import { sdk } from "./helper.js"

async function main() {
  const packModuleAddress = "0xc8212879F71da3f40A09F45927912001AA2025E6"
  const packModule = sdk.getPackModule(packModuleAddress)

  console.log("Opening the pack...")
  const opened = await packModule.open("0")
  console.log("Opened the pack!")
  console.log(opened)
}

try {
  await main()
} catch (error) {
  console.error("Error opening the pack", error)
  process.exit(1)
}
