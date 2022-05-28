import Link from "next/link"

const Navbar = () => {
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
    </nav>
  )
}

export default Navbar
