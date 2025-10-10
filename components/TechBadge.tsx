interface TechBadgeProps {
  name: string
}

export default function TechBadge({ name }: TechBadgeProps) {
  return (
    <span className="inline-flex items-center rounded-full border border-blue/30 bg-blue/10 px-2.5 py-0.5 text-xs font-medium text-blue">
      {name}
    </span>
  )
}