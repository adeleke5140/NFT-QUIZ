import Link from "next/link"
import { useAddress, useDisconnect, useMetamask } from "@thirdweb-dev/react"

const Navbar = () => {
  const connectWithMetamask = useMetamask()
  const address = useAddress()
  const disconnect = useDisconnect()
  return (
    <nav>
      <div className="nav-container">
        <Link href="/">
          <a className="nav-title">NFT Quiz</a>
        </Link>
        <Link href="/lounge">
          <a className="nav-subtitle">Winners Lounge</a>
        </Link>
      </div>
      {address ? (
        <div>
          <h2 className="connected-wallet">Connected as {address}</h2>
          <button className="primaryButton disconnect" onClick={disconnect}>
            Disconnect
          </button>
        </div>
      ) : (
        <button className="primaryButton" onClick={connectWithMetamask}>
          Connect ur Wallet, LFG!
        </button>
      )}
    </nav>
  )
}

export default Navbar
