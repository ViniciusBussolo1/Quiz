import { Check, ChevronRight } from 'lucide-react'
import { Card } from '../Card/Card'

export function Main() {
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
        <div className="w-full h-[3.625rem] flex justify-center">
          <span className="max-w-[25.848rem] w-full text-center text-2xl leading-[1.8rem] font-bold text-gray-1">
            Qual destas bandeiras representa a bandeira da Polinésia Francesa?
          </span>
        </div>
        <div className="w-full flex justify-between">
          <Card />
          <Card />
          <Card />
        </div>
        <div className="w-full flex justify-between items-center px-1">
          <span className="text-xs leading-[0.825rem] tracking-[0.225rem] font-bold text-gray-1">
            <span className="text-xl leading-[1.375rem] font-bold">4</span>/5
          </span>
          <button
            disabled
            className="w-12 h-12 bg-gray-3 flex justify-center items-center rounded-[1.688rem]"
          >
            <ChevronRight className="w-7 h-7 text-gray-2 " />
          </button>
        </div>
      </div>
    </div>
  )
}
