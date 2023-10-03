'use client'

import { Check, ChevronRight } from 'lucide-react'
import { Card } from '../Card/Card'
import { useEffect, useState } from 'react'
import supabase from '@/services/supabase'
import { Json } from '@/services/types/db_types'

interface Questions {
  corret_answers: string | null
  created_at: string
  id: string
  incorrect_answers: Json | null
  question: string | null
}

export function Main() {
  const [allQuestions, setAllQuestions] = useState<Array<Questions> | null>([])
  const [questions, setQuestions] = useState<Array<Questions> | null>([])
  const [answersCorrect, setAnswersCorrect] = useState(0)
  const [isCorrect, setIsCorrect] = useState<string | undefined>('')
  const [isIncorrect, setIsIncorrect] = useState<string | undefined>('')

  const [page, setPage] = useState(1)
  const [perPage, setPerPage] = useState(1)
  const [numberQuestions, setNumberQuestions] = useState(1)

  const [disabled, setDisabled] = useState(true)

  const handleCorrectAnswer = (answers: string | undefined) => {
    const answersIsCorrect = questions?.every((question) => {
      return question.corret_answers === answers
    })

    if (answersIsCorrect === true) {
      setIsCorrect(answers)
      setDisabled(false)
      setAnswersCorrect(answersCorrect + 1)
    } else {
      setIsIncorrect(answers)
      setDisabled(false)
    }
  }

  useEffect(() => {
    const fetchQuestions = async () => {
      const { data } = await supabase
        .from('Questions')
        .select('*')
        .range((page - 1) * perPage, page * perPage - 1)

      setQuestions(data)
    }

    const fetchAllQuestions = async () => {
      const { data } = await supabase.from('Questions').select('*')

      setAllQuestions(data)
    }

    fetchAllQuestions()
    fetchQuestions()
  }, [page, perPage])

  return (
    <div className="max-w-[66.25rem] w-full h-[49.125rem] bg-gray-6 rounded-lg shadow-container flex justify-center items-center px-2">
      <div className="max-w-[52.625rem] w-full space-y-[4.313rem]">
        <div className="w-full flex justify-between items-center">
          <h1 className="text-2xl leading-[1.65rem] text-gray-1">
            👋 <span className="font-extrabold">Quiz</span>Time
          </h1>
          <div className="px-5 py-3 flex justify-center items-center gap-[0.375rem] rounded-lg border border-green-light">
            <Check className="w-6 h-6 text-green-light" />
            <span className="text-xl leading-[1.375rem] font-bold text-green-light">
              {answersCorrect}
            </span>
          </div>
        </div>
        {questions?.map((question) => {
          return (
            <>
              <div
                key={question.id}
                className="w-full h-[3.625rem] flex justify-center"
              >
                <span className="max-w-[25.848rem] w-full text-center text-2xl leading-[1.8rem] font-bold text-gray-1">
                  {question.question}
                </span>
              </div>
              {isCorrect || isIncorrect ? (
                <>
                  <div className="w-full flex justify-between">
                    <Card
                      isCorrect={
                        isCorrect === question.incorrect_answers?.answers_a
                      }
                      isIncorrect={
                        isIncorrect === question.incorrect_answers?.answers_a
                      }
                      answers={question.incorrect_answers?.answers_a as string}
                      className="cursor-not-allowed hover:bg-gray-6"
                      onClick={() =>
                        handleCorrectAnswer(
                          question.incorrect_answers?.answers_a,
                        )
                      }
                    />
                    <Card
                      isCorrect={
                        isCorrect === question.incorrect_answers?.answers_b
                      }
                      isIncorrect={
                        isIncorrect === question.incorrect_answers?.answers_b
                      }
                      className="cursor-not-allowed hover:bg-gray-6"
                      answers={question.incorrect_answers?.answers_b as string}
                      onClick={() =>
                        handleCorrectAnswer(
                          question.incorrect_answers?.answers_b,
                        )
                      }
                    />
                    <Card
                      isCorrect={
                        isCorrect === question.incorrect_answers?.answers_c
                      }
                      isIncorrect={
                        isIncorrect === question.incorrect_answers?.answers_c
                      }
                      className="cursor-not-allowed hover:bg-gray-6"
                      answers={question.incorrect_answers?.answers_c as string}
                      onClick={() =>
                        handleCorrectAnswer(
                          question.incorrect_answers?.answers_c,
                        )
                      }
                    />
                  </div>
                </>
              ) : (
                <div className="w-full flex justify-between">
                  <Card
                    isCorrect={
                      isCorrect === question.incorrect_answers?.answers_a
                    }
                    isIncorrect={
                      isIncorrect === question.incorrect_answers?.answers_a
                    }
                    answers={question.incorrect_answers?.answers_a as string}
                    onClick={() =>
                      handleCorrectAnswer(question.incorrect_answers?.answers_a)
                    }
                  />
                  <Card
                    isCorrect={
                      isCorrect === question.incorrect_answers?.answers_b
                    }
                    isIncorrect={
                      isIncorrect === question.incorrect_answers?.answers_b
                    }
                    answers={question.incorrect_answers?.answers_b as string}
                    onClick={() =>
                      handleCorrectAnswer(question.incorrect_answers?.answers_b)
                    }
                  />
                  <Card
                    isCorrect={
                      isCorrect === question.incorrect_answers?.answers_c
                    }
                    isIncorrect={
                      isIncorrect === question.incorrect_answers?.answers_c
                    }
                    answers={question.incorrect_answers?.answers_c as string}
                    onClick={() =>
                      handleCorrectAnswer(question.incorrect_answers?.answers_c)
                    }
                  />
                </div>
              )}

              <div className="w-full flex justify-between items-center px-1">
                <span className="text-xs leading-[0.825rem] tracking-[0.225rem] font-bold text-gray-1">
                  <span className="text-xl leading-[1.375rem] font-bold">
                    {numberQuestions}
                  </span>
                  /{allQuestions?.length}
                </span>
                <button
                  disabled={disabled}
                  className="w-12 h-12 bg-green-dark text-green-light flex justify-center items-center rounded-[1.688rem] disabled:bg-gray-3 disabled:text-gray-2  "
                >
                  <ChevronRight className="w-7 h-7  " />
                </button>
              </div>
            </>
          )
        })}
      </div>
    </div>
  )
}
