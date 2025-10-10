/**
 * Skeleton loading card for project cards.
 * Displays a placeholder while content is loading.
 */

export default function SkeletonCard() {
  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-border bg-bg-secondary">
      <div className="flex flex-1 flex-col p-6">
        {/* Title skeleton */}
        <div className="h-7 w-3/4 animate-pulse rounded bg-border" />

        {/* Summary skeleton */}
        <div className="mt-3 space-y-2">
          <div className="h-4 w-full animate-pulse rounded bg-border" />
          <div className="h-4 w-5/6 animate-pulse rounded bg-border" />
        </div>

        {/* Tech badges skeleton */}
        <div className="mt-4 flex flex-wrap gap-2">
          <div className="h-6 w-16 animate-pulse rounded-full bg-border" />
          <div className="h-6 w-20 animate-pulse rounded-full bg-border" />
          <div className="h-6 w-14 animate-pulse rounded-full bg-border" />
        </div>
      </div>

      {/* Footer skeleton */}
      <div className="border-t border-border px-6 py-3">
        <div className="flex items-center gap-4">
          <div className="h-4 w-20 animate-pulse rounded bg-border" />
          <div className="h-4 w-20 animate-pulse rounded bg-border" />
        </div>
      </div>
    </article>
  )
}
