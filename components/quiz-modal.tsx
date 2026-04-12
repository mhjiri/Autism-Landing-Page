"use client"

import { useState } from "react"
import { X, ClipboardList, Check, User } from "lucide-react"
import { Button } from "@/components/ui/button"

interface QuizModalProps {
  isOpen: boolean
  onClose: () => void
}

interface Question {
  id: number
  question: string
  correctAnswer: "Myth" | "Truth"
  explanation: string
}

const questions: Question[] = [
  {
    id: 1,
    question: "Autism is a disease that needs to be cured.",
    correctAnswer: "Myth",
    explanation: "Autism is not a disease—it is a neurodevelopmental condition and part of human diversity."
  },
  {
    id: 2,
    question: "Autism is a spectrum, meaning it affects people differently.",
    correctAnswer: "Truth",
    explanation: "Autism varies widely—each individual has unique strengths, challenges, and support needs."
  },
  {
    id: 3,
    question: "People with autism do not feel emotions.",
    correctAnswer: "Myth",
    explanation: "People with autism experience emotions deeply but may express them differently."
  },
  {
    id: 4,
    question: "Vaccines cause autism.",
    correctAnswer: "Myth",
    explanation: "Extensive scientific research shows no link between vaccines and autism."
  },
  {
    id: 5,
    question: "Autism only occurs in children.",
    correctAnswer: "Myth",
    explanation: "Autism is lifelong—children with autism grow into adults with autism."
  },
  {
    id: 6,
    question: "Early detection can improve outcomes for children with autism.",
    correctAnswer: "Truth",
    explanation: "Early support helps develop communication, learning, and social skills."
  },
  {
    id: 7,
    question: "Lack of eye contact always means someone is not paying attention.",
    correctAnswer: "Myth",
    explanation: "Some individuals focus better without eye contact—it doesn't mean they are not engaged."
  },
  {
    id: 8,
    question: "Parenting style can cause autism.",
    correctAnswer: "Myth",
    explanation: "Autism is not caused by parenting—it is a biological condition."
  },
  {
    id: 9,
    question: "People with autism may communicate in different ways (verbal or non-verbal).",
    correctAnswer: "Truth",
    explanation: "Communication can include speech, gestures, devices, or alternative methods."
  },
  {
    id: 10,
    question: "Children with autism cannot attend regular schools.",
    correctAnswer: "Myth",
    explanation: "Many children with autism thrive in inclusive classrooms with proper support."
  },
  {
    id: 11,
    question: "Structured routines can help individuals with autism feel more comfortable.",
    correctAnswer: "Truth",
    explanation: "Predictability reduces anxiety and helps with daily functioning."
  },
  {
    id: 12,
    question: "Community awareness plays an important role in supporting individuals with autism.",
    correctAnswer: "Truth",
    explanation: "Awareness leads to inclusion, early support, and better outcomes."
  }
]

export function QuizModal({ isOpen, onClose }: QuizModalProps) {
  const [username, setUsername] = useState("")
  const [step, setStep] = useState<"username" | "quiz" | "explanation" | "score">("username")
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<"Myth" | "Truth" | null>(null)
  const [score, setScore] = useState(0)
  const [answers, setAnswers] = useState<Array<{ selected: "Myth" | "Truth"; correct: boolean }>>([])

  if (!isOpen) return null

  const handleStartQuiz = () => {
    if (username.trim()) {
      setStep("quiz")
    }
  }

  const handleClose = () => {
    setUsername("")
    setStep("username")
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setScore(0)
    setAnswers([])
    onClose()
  }

  const handleAnswer = (answer: "Myth" | "Truth") => {
    setSelectedAnswer(answer)
    const isCorrect = answer === questions[currentQuestion].correctAnswer
    
    setAnswers([...answers, { selected: answer, correct: isCorrect }])
    
    if (isCorrect) {
      setScore(score + 1)
      // Move to next question or show score
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1)
        setSelectedAnswer(null)
      } else {
        setStep("score")
      }
    } else {
      // Show explanation
      setStep("explanation")
    }
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setStep("quiz")
    } else {
      setStep("score")
    }
  }

  const question = questions[currentQuestion]
  const progress = ((currentQuestion + 1) / questions.length) * 100

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-md"
        onClick={handleClose}
      />
      
      {/* Modal */}
      <div className="relative z-10 w-full max-w-[95vw] sm:max-w-md max-h-[85vh] sm:max-h-[90vh] overflow-y-auto rounded-2xl">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute -top-10 sm:-top-12 right-0 text-white/80 hover:text-white transition-colors z-20"
          aria-label="Close modal"
        >
          <X className="h-6 w-6 sm:h-8 sm:w-8" />
        </button>

        {step === "username" && (
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            {/* Purple Header */}
            <div className="relative bg-[#8b7fd4] px-4 py-8 sm:px-8 sm:py-10">
              {/* Decorative circles */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-40 sm:h-40 rounded-full border border-white/20" />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 sm:w-56 sm:h-56 rounded-full border border-white/10" />
              
              {/* Title */}
              <div className="relative z-10 text-center">
                <span className="text-3xl sm:text-4xl font-bold italic text-white">Myth</span>
                <span className="text-xl sm:text-2xl font-medium text-white/90 mx-2 sm:mx-3">vs</span>
                <span className="text-3xl sm:text-4xl font-bold italic text-[#2d2a5d]">Truth</span>
              </div>
            </div>

            {/* Scalloped border */}
            <div className="relative h-6 bg-white">
              <svg 
                className="absolute -top-5 left-0 w-full h-6" 
                viewBox="0 0 400 24" 
                preserveAspectRatio="none"
              >
                <path 
                  d="M0,24 C10,24 10,12 20,12 C30,12 30,24 40,24 C50,24 50,12 60,12 C70,12 70,24 80,24 C90,24 90,12 100,12 C110,12 110,24 120,24 C130,24 130,12 140,12 C150,12 150,24 160,24 C170,24 170,12 180,12 C190,12 190,24 200,24 C210,24 210,12 220,12 C230,12 230,24 240,24 C250,24 250,12 260,12 C270,12 270,24 280,24 C290,24 290,12 300,12 C310,12 310,24 320,24 C330,24 330,12 340,12 C350,12 350,24 360,24 C370,24 370,12 380,12 C390,12 390,24 400,24 L400,24 L0,24 Z" 
                  fill="white"
                />
              </svg>
            </div>

            {/* White Content Area */}
            <div className="bg-white px-4 pb-8 sm:px-8 sm:pb-10">
              <p className="text-center text-base sm:text-lg font-medium text-[#2d2a5d] mb-6 sm:mb-8">
                To start the Quiz Please choose<br />a username
              </p>

              {/* Username Input */}
              <div className="mb-6 sm:mb-8">
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Username"
                  className="w-full px-4 py-3 sm:px-6 sm:py-4 bg-[#f0f4ff] border border-[#d0d8f0] rounded-xl text-center text-[#2d2a5d] font-medium placeholder:text-[#2d2a5d]/60 focus:outline-none focus:ring-2 focus:ring-[#7c6bc4]/50"
                />
              </div>

              {/* Start Button */}
              <Button
                onClick={handleStartQuiz}
                disabled={!username.trim()}
                className="w-full h-12 sm:h-14 bg-[#7c6bc4] hover:bg-[#6b5ab3] text-white rounded-full flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ClipboardList className="h-4 w-4 sm:h-5 sm:w-5" />
                Start the Quiz Now
              </Button>
            </div>
          </div>
        )}

        {step === "quiz" && (
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            {/* Purple Header with Progress */}
            <div className="bg-[#7c6bc4] px-4 py-3 sm:px-6 sm:py-4">
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <div className="flex items-center gap-1.5 sm:gap-2 bg-white/20 rounded-full px-2 py-1 sm:px-3">
                  <User className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                  <span className="text-white text-xs sm:text-sm font-medium truncate max-w-[80px] sm:max-w-[120px]">{username}</span>
                </div>
                <div className="bg-[#ffb347] rounded-full px-2 py-1 sm:px-3">
                  <span className="text-white text-xs sm:text-sm font-bold">{score} pts</span>
                </div>
              </div>
              {/* Progress bar */}
              <div className="h-1.5 sm:h-2 bg-white/30 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-white rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* White Content Area */}
            <div className="bg-white px-4 py-6 sm:px-6 sm:py-8">
              {/* Question number circle */}
              <div className="flex justify-center mb-4 sm:mb-6">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20">
                  <svg className="w-full h-full -rotate-90">
                    <circle
                      cx="50%"
                      cy="50%"
                      r="45%"
                      fill="none"
                      stroke="#f0f4ff"
                      strokeWidth="6"
                    />
                    <circle
                      cx="50%"
                      cy="50%"
                      r="45%"
                      fill="none"
                      stroke="#f6a5a5"
                      strokeWidth="6"
                      strokeDasharray={`${progress * 2.26} 226`}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xl sm:text-2xl font-bold text-[#f6a5a5]">{currentQuestion + 1}</span>
                  </div>
                </div>
              </div>

              {/* Question label */}
              <p className="text-xs sm:text-sm text-[#7c6bc4] font-medium tracking-wider mb-2 sm:mb-3">
                QUESTION {currentQuestion + 1} OF {questions.length}
              </p>

              {/* Question text */}
              <h3 className="text-base sm:text-xl font-bold text-[#2d2a5d] mb-6 sm:mb-8 leading-relaxed">
                {question.question}
              </h3>

              {/* Answer buttons */}
              <div className="flex gap-3 sm:gap-4">
                <Button
                  onClick={() => handleAnswer("Myth")}
                  className="flex-1 h-12 sm:h-14 bg-[#ff6b6b] hover:bg-[#ff5252] text-white rounded-full text-base sm:text-lg font-semibold"
                >
                  Myth
                </Button>
                <Button
                  onClick={() => handleAnswer("Truth")}
                  className="flex-1 h-12 sm:h-14 bg-[#4cd964] hover:bg-[#3dbf54] text-white rounded-full text-base sm:text-lg font-semibold"
                >
                  Truth
                </Button>
              </div>
            </div>
          </div>
        )}

        {step === "explanation" && (
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            {/* Purple Header */}
            <div className="bg-[#7c6bc4] px-4 py-3 sm:px-6 sm:py-4 flex items-center justify-between">
              <h2 className="text-base sm:text-xl font-bold text-white">Answers Explanation</h2>
              <button onClick={handleClose} className="text-white/80 hover:text-white">
                <X className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>
            </div>

            {/* White Content Area */}
            <div className="bg-white px-4 py-5 sm:px-6 sm:py-6">
              {/* Question label */}
              <p className="text-xs sm:text-sm text-[#7c6bc4] font-medium tracking-wider mb-2 sm:mb-3">
                QUESTION {currentQuestion + 1} OF {questions.length}
              </p>

              {/* Question text */}
              <h3 className="text-base sm:text-lg font-bold text-[#2d2a5d] mb-4 sm:mb-6 leading-relaxed">
                {question.question}
              </h3>

              {/* Selected Answer (Wrong) */}
              <p className="text-xs sm:text-sm text-[#7c6bc4] font-medium tracking-wider mb-1.5 sm:mb-2">
                SELECTED ANSWER
              </p>
              <div className="flex items-center justify-between px-3 py-2.5 sm:px-4 sm:py-3 bg-[#fff5f5] border-2 border-[#ff6b6b] rounded-xl mb-4 sm:mb-6">
                <span className="text-[#ff6b6b] text-sm sm:text-base font-medium">{selectedAnswer}</span>
                <X className="h-4 w-4 sm:h-5 sm:w-5 text-[#ff6b6b]" />
              </div>

              {/* Correct Answer */}
              <p className="text-xs sm:text-sm text-[#7c6bc4] font-medium tracking-wider mb-1.5 sm:mb-2">
                CORRECT ANSWER
              </p>
              <div className="flex items-center justify-between px-3 py-2.5 sm:px-4 sm:py-3 bg-[#4cd964] rounded-xl mb-4 sm:mb-6">
                <span className="text-white text-sm sm:text-base font-medium">{question.correctAnswer}</span>
                <Check className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
              </div>

              {/* Explanation */}
              <p className="text-xs sm:text-sm text-[#7c6bc4] font-medium tracking-wider mb-1.5 sm:mb-2">
                EXPLANATION
              </p>
              <p className="text-sm sm:text-base text-[#2d2a5d] leading-relaxed mb-6 sm:mb-8">
                {question.explanation}
              </p>

              {/* Next Button */}
              <Button
                onClick={handleNext}
                className="w-full h-12 sm:h-14 bg-[#7c6bc4] hover:bg-[#6b5ab3] text-white rounded-full text-base sm:text-lg font-semibold"
              >
                Next
              </Button>
            </div>
          </div>
        )}

        {step === "score" && (
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            {/* Purple Header */}
            <div className="relative bg-[#8b7fd4] px-4 py-8 sm:px-8 sm:py-10">
              {/* Decorative circles */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-40 sm:h-40 rounded-full border border-white/20" />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 sm:w-56 sm:h-56 rounded-full border border-white/10" />
              
              {/* Title */}
              <div className="relative z-10 text-center">
                <span className="text-3xl sm:text-4xl font-bold italic text-white">Quiz</span>
                <span className="text-xl sm:text-2xl font-medium text-white/90 mx-2 sm:mx-3">Complete!</span>
              </div>
            </div>

            {/* Scalloped border */}
            <div className="relative h-5 sm:h-6 bg-white">
              <svg 
                className="absolute -top-4 sm:-top-5 left-0 w-full h-5 sm:h-6" 
                viewBox="0 0 400 24" 
                preserveAspectRatio="none"
              >
                <path 
                  d="M0,24 C10,24 10,12 20,12 C30,12 30,24 40,24 C50,24 50,12 60,12 C70,12 70,24 80,24 C90,24 90,12 100,12 C110,12 110,24 120,24 C130,24 130,12 140,12 C150,12 150,24 160,24 C170,24 170,12 180,12 C190,12 190,24 200,24 C210,24 210,12 220,12 C230,12 230,24 240,24 C250,24 250,12 260,12 C270,12 270,24 280,24 C290,24 290,12 300,12 C310,12 310,24 320,24 C330,24 330,12 340,12 C350,12 350,24 360,24 C370,24 370,12 380,12 C390,12 390,24 400,24 L400,24 L0,24 Z" 
                  fill="white"
                />
              </svg>
            </div>

            {/* White Content Area */}
            <div className="bg-white px-4 pb-8 sm:px-8 sm:pb-10">
              <div className="text-center mb-6 sm:mb-8">
                <p className="text-base sm:text-lg text-[#2d2a5d]/70 mb-2">Well done, {username}!</p>
                <p className="text-4xl sm:text-5xl font-bold text-[#7c6bc4] mb-2">{score}/{questions.length}</p>
                <p className="text-sm sm:text-base text-[#2d2a5d]/70">Questions Correct</p>
              </div>

              {/* Score breakdown */}
              <div className="bg-[#f0f4ff] rounded-xl p-3 sm:p-4 mb-6 sm:mb-8">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm sm:text-base text-[#2d2a5d]/70">Correct Answers</span>
                  <span className="font-bold text-[#4cd964]">{score}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm sm:text-base text-[#2d2a5d]/70">Wrong Answers</span>
                  <span className="font-bold text-[#ff6b6b]">{questions.length - score}</span>
                </div>
              </div>

              {/* Close Button */}
              <Button
                onClick={handleClose}
                className="w-full h-12 sm:h-14 bg-[#7c6bc4] hover:bg-[#6b5ab3] text-white rounded-full text-base sm:text-lg font-semibold"
              >
                Close Quiz
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
