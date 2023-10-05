import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

interface CardSkeletonProps {
  cards: number
}

export function CardSkeleton({ cards }: CardSkeletonProps) {
  return Array(cards)
    .fill(0)
    .map((_, index) => (
      <div
        key={index}
        className="max-w-[15.625rem] w-full h-[18.75rem] rounded-lg border-gray-3 border-t-[0.2rem] border-r-[0.2rem] border-b-[0.399rem] border-l-[0.2rem] px-2 py-2 flex flex-col gap-11"
      >
        <div className="w-full flex justify-end pr-1">
          <Skeleton circle width={24} height={24} />
        </div>
        <div className="w-full px-5 ">
          <Skeleton className="w-[120px] h-[130px] " />
        </div>
      </div>
    ))
}
