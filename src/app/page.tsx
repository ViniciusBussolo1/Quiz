import { Camera } from 'lucide-react'

export default function Home() {
  return (
    <div className="w-screen h-screen bg-background-body flex justify-center items-center px-2">
      <div className="max-w-[66.25rem] w-full h-[49.125rem] bg-gray-6 rounded-lg shadow-container flex justify-center items-center">
        <div className="max-w-[52.625rem] w-full">
          <div>
            <h1 className="text-2xl leading-[1.65rem] text-gray-1">
              👋 <span className="font-bold">Quiz</span>Time
            </h1>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  )
}
