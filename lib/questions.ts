export type Question = {
  questionText: string
  image?: string
  answers: string[]
  correctAnswerIndex?: number
}

const quizQuestions: Question[] = [
  {
    questionText: "In Crypto, what does a Bear Market mean?",
    image:
      "https://images.unsplash.com/photo-1588167056840-13caf6e4562a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",
    answers: [
      "When Bears crowd the market",
      "A Market season named to protect bears in Africa",
      "a prolonged period of decline in a financial market.",
      "a prolonged season of tokens going to the moon"
    ],
    correctAnswerIndex: 2
  },
  {
    questionText: "Which of the following is not a centralized exchange?",
    image:
      "https://images.unsplash.com/photo-1600370421747-214a5d99161c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZXhjaGFuZ2V8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
    answers: ["Binance", "Uniswap", "Coinbase", "Gemini"],
    correctAnswerIndex: 1
  },
  {
    questionText: "NFTs are short for?",
    image:
      "https://images.unsplash.com/photo-1646463509175-8b080ab5e137?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    answers: [
      "Not F**ing Tacos",
      "Non Fungible Tokens",
      "Nice Fits Tomboys",
      "Trick Question, they mean nothing"
    ],
    correctAnswerIndex: 1
  },
  {
    questionText:
      "the Ethereum token standard, providing a standardized smart contract structure for fungible tokens is?",
    image:
      "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGV0aGVyZXVtfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    answers: ["ERC-721", "ERC-20", "ERC-22", "ERC-216"],
    correctAnswerIndex: 1
  },
  {
    questionText: "what does gm mean?",
    answers: ["good mood", "good morning", "go macho!!", "too easy for me"],
    correctAnswerIndex: 1
  },
  {
    questionText: "A period where market prices are rising is a: ",
    answers: ["Space Market", "Cheetah Market", "Bull Market", "Horse Market"],
    correctAnswerIndex: 2
  }
]

export default quizQuestions
