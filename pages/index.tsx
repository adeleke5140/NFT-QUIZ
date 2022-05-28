import Head from "next/head"
import QuizGame from "../components/QuizGame"
import quizQuestions from "../lib/questions"

const Home = () => {
  quizQuestions.forEach((q) => delete q.correctAnswerIndex)

  return (
    <div>
      <Head>
        <title>NFT Quiz app!</title>
        <meta name="description" content="an NFT Quiz app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <QuizGame questions={quizQuestions} />
    </div>
  )
}

export default Home
