import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export function NextQuestionSkeleton() {
  return (
    <div className="flex justify-between items-center">
      <div className="  ">
        <Skeleton width={40} />
      </div>
      <div>
        <Skeleton circle width={48} height={48} />
      </div>
    </div>
  )
}
