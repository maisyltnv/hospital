import Image from "next/image"

import { cn } from "@/lib/utils"

export type PublicPageHeroProps = {
  src: string
  alt: string
  eyebrow: string
  title: string
  aspectClassName?: string
  className?: string
  priority?: boolean
}

export function PublicPageHero({
  src,
  alt,
  eyebrow,
  title,
  aspectClassName = "aspect-[21/9]",
  className,
  priority,
}: PublicPageHeroProps) {
  return (
    <div
      className={cn(
        "relative mb-10 w-full overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/5 dark:ring-white/10",
        aspectClassName,
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 1280px) 100vw, 1280px"
        priority={priority}
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-primary/70 via-primary/35 to-transparent"
        aria-hidden
      />
      <div className="absolute bottom-6 left-6 max-w-lg text-white">
        <p className="text-sm font-medium uppercase tracking-wide opacity-90">{eyebrow}</p>
        <p className="mt-1 text-2xl font-semibold leading-tight">{title}</p>
      </div>
    </div>
  )
}
