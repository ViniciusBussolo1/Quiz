import { MouseEvent } from 'react'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import { Check, X } from 'lucide-react'
import { twMerge } from 'tailwind-merge'

import Image from 'next/image'

interface CardProps {
  answers: string | StaticImport
  onClick: (event: MouseEvent<HTMLDivElement>) => void
  className?: string
  isCorrect: boolean
  isIncorrect: boolean
}

export function Card({
  answers,
  onClick,
  isCorrect,
  isIncorrect,
  className,
}: CardProps) {
  return (
    <>
      {isCorrect === true ? (
        <div
          className={twMerge(
            'max-w-[15.625rem] w-full h-[18.75rem] relative py-[2.875rem] px-8 bg-gray-6 rounded-lg border-green-light border-t-[0.2rem] border-r-[0.2rem] border-b-[0.399rem] border-l-[0.2rem]',
            className,
          )}
        >
          <div className="w-6 h-6 rounded-[1.688rem] bg-green-light absolute top-[0.813rem] left-[12.813rem] flex justify-center items-center">
            <Check className="w-[1.125rem] h-[1.125rem] text-green-dark" />
          </div>
          <div className="h-full flex justify-center items-center">
            {typeof answers === 'string' && answers.includes('https') ? (
              <Image src={answers} alt="Image Flag" width={260} height={260} />
            ) : (
              <span className="text-lg leading-[1.1rem] text-gray-1 text-center">
                {answers as string}
              </span>
            )}
          </div>
        </div>
      ) : isIncorrect === true ? (
        <div
          className={twMerge(
            'max-w-[15.625rem] w-full h-[18.75rem] relative py-[2.875rem] px-8 bg-gray-6 rounded-lg border-red-light border-t-[0.2rem] border-r-[0.2rem] border-b-[0.399rem] border-l-[0.2rem]',
            className,
          )}
        >
          <div className="w-6 h-6 rounded-[1.688rem] bg-red-light absolute top-[0.813rem] left-[12.813rem] flex justify-center items-center">
            <X className="w-[1.125rem] h-[1.125rem] text-red-dark" />
          </div>
          <div className="h-full flex justify-center items-center">
            {typeof answers === 'string' && answers.includes('https') ? (
              <Image src={answers} alt="Image Flag" width={260} height={260} />
            ) : (
              <span className="text-lg leading-[1.1rem] text-gray-1 text-center">
                {answers as string}
              </span>
            )}
          </div>
        </div>
      ) : (
        <div
          className={twMerge(
            'max-w-[15.625rem] w-full h-[18.75rem] relative py-[2.875rem] px-8 bg-gray-6 hover:bg-gray-4 rounded-lg border-gray-3 border-t-[0.2rem] border-r-[0.2rem] border-b-[0.399rem] border-l-[0.2rem] cursor-pointer',
            className,
          )}
          onClick={onClick}
        >
          <div className="w-6 h-6 rounded-[1.688rem] border-[0.188rem] border-gray-2 absolute top-[0.813rem] left-[12.813rem]"></div>
          <div className="h-full flex justify-center items-center">
            {typeof answers === 'string' && answers.includes('https') ? (
              <Image src={answers} alt="Image Flag" width={260} height={260} />
            ) : (
              <span className="text-lg leading-[1.1rem] text-gray-1 text-center">
                {answers as string}
              </span>
            )}
          </div>
        </div>
      )}
    </>
  )
}
