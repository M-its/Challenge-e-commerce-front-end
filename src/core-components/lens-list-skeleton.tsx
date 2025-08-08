import Card from '../components/card'
import Skeleton from '../components/skeleton'

export default function LensListSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {Array.from({ length: 9 }).map((_, i) => (
        <Card
          key={i}
          className="bg-gray-800 border border-gray-700 p-6 flex flex-col justify-between"
        >
          <div>
            <div className="flex justify-between items-start mb-2">
              <Skeleton className="h-7 w-3/4" />
              <Skeleton className="h-5 w-16 rounded-full" />
            </div>
            <div className="space-y-2">
              <Skeleton className="h-4 w-1/2" />
              <Skeleton className="h-4 w-1/3" />
              <Skeleton className="h-4 w-2/5" />
              <Skeleton className="h-4 w-1/2 mb-2" />
            </div>
            <div className="flex justify-between items-center">
              <Skeleton className="h-4 w-1/4" />
              <Skeleton className="h-4 w-1/3" />
            </div>
          </div>
          <div className="flex mt-4">
            <Skeleton className="h-9 w-full" />
          </div>
        </Card>
      ))}
    </div>
  )
}
