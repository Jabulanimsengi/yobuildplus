import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
    return (
        <div className="container mx-auto px-4 py-8 space-y-8">
            {/* Hero Skeleton */}
            <div className="space-y-4">
                <Skeleton className="h-12 w-3/4 max-w-lg bg-slate-200" />
                <Skeleton className="h-6 w-1/2 max-w-md bg-slate-100" />
            </div>

            {/* Grid Skeleton */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="flex flex-col space-y-3">
                        <Skeleton className="h-48 w-full rounded-xl bg-slate-200" />
                        <div className="space-y-2">
                            <Skeleton className="h-4 w-3/4 bg-slate-200" />
                            <Skeleton className="h-4 w-1/2 bg-slate-100" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
