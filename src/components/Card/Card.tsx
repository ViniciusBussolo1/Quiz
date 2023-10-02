import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'

interface CardProps {
  answers: string | StaticImport
}

export function Card({ answers }: CardProps) {
  return (
    <div className="max-w-[15.625rem] w-full h-[18.75rem] relative py-[2.875rem] px-8 bg-gray-5 hover:bg-gray-4 rounded-lg border-gray-3 border-t-[0.2rem] border-r-[0.2rem] border-b-[0.399rem] border-l-[0.2rem] cursor-pointer">
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
  )
}
