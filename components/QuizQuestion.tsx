/* eslint-disable react/no-unescaped-entities */
import axios from "axios"
import Link from "next/link"
import { FormEvent, useState } from "react"
import {
  CheckAnswerPayload,
  CheckAnswerResponse
} from "../pages/api/check-answer"
import PrimaryButton from "./PrimaryButton"
import invariant from "tiny-invariant"

// import { useWeb3 } from "@3rdweb/hooks"
import { useAddress, useSigner } from "@thirdweb-dev/react"
import {} from "@thirdweb-dev/sdk"

type Props = {
  questionIndex: number
  questionText: string
  image?: string
  answers: string[]
  nextQuestionFunction: () => void
}

type AnswerResult = "correct" | "incorrect"

export default function QuizQuestion({
  questionIndex,
  questionText,
  image,
  answers,
  nextQuestionFunction
}: Props) {
  const address = useAddress()
  const provider = useSigner()
  console.log(provider)

  const [answerIndex, setAnswerIndex] = useState<number | undefined>(undefined)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | undefined>(undefined)
  const [answerResult, setAnswerResult] = useState<AnswerResult | undefined>(
    undefined
  )
  const [correctAnswerWas, setCorrectAnswerWas] = useState<number | undefined>(
    undefined
  )

  if (!address) {
    return (
      <p
        style={{
          color: "var(--primary-color1)",
          height: "60vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "var(--font-family1)",
          fontSize: "2rem"
        }}
      >
        Please fren, connect your wallet🙈 to take the quiz🥳{" "}
      </p>
    )
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    invariant(
      provider !== undefined,
      "Provider must be defined to submit an answer"
    )
    try {
      invariant(answerIndex !== undefined, "Answer index is required to submit")
      const message =
        "Please sign this message to confirm your identity and submit the answer.This won't cost any gas!"
      const signedMessage = await provider.signMessage(message)

      const payload: CheckAnswerPayload = {
        questionIndex,
        answerIndex,
        message,
        signedMessage
      }

      const checkResponse = await axios.post("/api/check-answer", payload)
      const result = checkResponse.data as CheckAnswerResponse

      if (result.kind === "error") {
        setError(result.error)
      }

      if (result.kind === "correct") {
        setAnswerResult("correct")
        setCorrectAnswerWas(answerIndex)
      }

      if (result.kind === "incorrect") {
        setAnswerResult("incorrect")
        setCorrectAnswerWas(result.correctAnswerIndex)
      }
    } finally {
      setSubmitting(false)
    }
  }

  const renderResult = () => {
    if (submitting) {
      return <PrimaryButton disabled={true}>Checking Answer...</PrimaryButton>
    }

    if (answerResult === "correct") {
      return (
        <>
          <p className="congrats">
            Congratulations! That was the right answer!
          </p>
          <p>
            A pack will be sent to you shortly. You'll be able to check it out
            and open it in the{" "}
            <Link href="/lounge">
              <a className="underline hover:no-underline">lounge</a>
            </Link>
            !
          </p>
        </>
      )
    }

    if (answerResult === "incorrect") {
      return <p className="error">Sorry, that was incorrect!</p>
    }

    return (
      <>
        <PrimaryButton
          type="submit"
          onClick={handleSubmit}
          disabled={answerIndex === undefined}
        >
          Check Answer
        </PrimaryButton>
        {error ? <p className="text-red-500">{error}</p> : null}
      </>
    )
  }

  return (
    <form>
      <div className="form-container">
        <div>
          <h1 className="form-title">
            Web3 Quiz <span className="form-title-extra">win NFT Lootbox</span>
          </h1>
          <div className="question-container">
            <label className="question-label">{questionText}</label>
            {image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={image} className="question-img" alt="" />
            ) : null}
          </div>
          <fieldset className="form-fieldset">
            <div>
              {answers.map((answerText, i) => (
                <div key={i} className="input-container">
                  <input
                    id={i.toString()}
                    name="quiz-answer"
                    type="radio"
                    className="form-fieldset-radio"
                    value={i}
                    checked={answerIndex === i}
                    onChange={(e) => setAnswerIndex(Number(e.target.value))}
                    disabled={answerResult !== undefined}
                  />
                  <label
                    htmlFor={i.toString()}
                    className="form-fieldset-answer"
                  >
                    {answerText}
                    {i === correctAnswerWas ? <span> ✅</span> : null}
                  </label>
                </div>
              ))}
            </div>
          </fieldset>
        </div>

        {renderResult()}

        {answerResult !== undefined ? (
          <PrimaryButton onClick={nextQuestionFunction}>
            Next Question
          </PrimaryButton>
        ) : null}
      </div>
    </form>
  )
}
