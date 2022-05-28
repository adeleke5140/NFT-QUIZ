import Head from "next/head"

export function getStaticProps() {
  return {
    props: {
      title: "Winner's Spot"
    }
  }
}

export default function Lounge() {
  return (
    <div>
      <Head>
        <title>Winner&apos;s lounge</title>
      </Head>
      <p className="lounge-text">
        You need to own some NFTS to access the lounge!
      </p>
    </div>
  )
}
