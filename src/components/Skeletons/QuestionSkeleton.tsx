import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export function QuestionSkeleton() {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex flex-col gap-2 max-w-[23.75rem] w-full ">
        <Skeleton />
      </div>
      <div className="flex flex-col gap-2 max-w-[25.75rem] w-full ">
        <Skeleton />
      </div>
      <div className="flex flex-col gap-2 max-w-[21.875rem] w-full ">
        <Skeleton />
      </div>
    </div>
  )
}
