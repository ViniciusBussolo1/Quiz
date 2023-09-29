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
  const [questions, setQuestions] = useState<Array<Questions> | null>([])
  const [page, setPage] = useState(1)
  const [perPage, setPerPage] = useState(1)

  useEffect(() => {
    const fetchQuestions = async () => {
      const { data } = await supabase
        .from('Questions')
        .select('*')
        .range((page - 1) * perPage, page * perPage - 1)

      setQuestions(data)
    }

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
              3
            </span>
          </div>
        </div>
        {questions?.map((question, index) => {
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
              <div className="w-full flex justify-between">
                <Card
                  answers={question.incorrect_answers?.answers_a as string}
                />
                <Card
                  answers={question.incorrect_answers?.answers_b as string}
                />
                <Card
                  answers={question.incorrect_answers?.answers_c as string}
                />
              </div>
              <div className="w-full flex justify-between items-center px-1">
                <span className="text-xs leading-[0.825rem] tracking-[0.225rem] font-bold text-gray-1">
                  <span className="text-xl leading-[1.375rem] font-bold">
                    {index + 1}
                  </span>
                  /{questions.length}
                </span>
                <button
                  disabled
                  className="w-12 h-12 bg-gray-3 flex justify-center items-center rounded-[1.688rem]"
                >
                  <ChevronRight className="w-7 h-7 text-gray-2 " />
                </button>
              </div>
            </>
          )
        })}
      </div>
    </div>
  )
}
