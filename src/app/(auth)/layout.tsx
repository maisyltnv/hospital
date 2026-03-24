import Image from "next/image"

import { HOSPITAL } from "@/lib/constants"
import { publicImages } from "@/lib/public-images"

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-full flex-col lg:flex-row">
      <div className="relative h-44 w-full shrink-0 lg:h-auto lg:min-h-screen lg:w-[42%] lg:max-w-xl">
        <Image
          src={publicImages.heroMain}
          alt={`${HOSPITAL.shortName} — clinical care and hospital environment`}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 40vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/50 to-primary/25 lg:bg-gradient-to-r lg:from-primary/80 lg:via-primary/45 lg:to-primary/20" aria-hidden />
        <div className="absolute right-0 bottom-0 left-0 p-5 text-white lg:p-8">
          <p className="text-[11px] font-semibold tracking-widest uppercase opacity-90 lg:text-xs">
            {HOSPITAL.shortName}
          </p>
          <p className="mt-1 text-lg font-semibold leading-snug lg:mt-2 lg:text-xl">
            Secure access to your hospital platform
          </p>
          <p className="mt-1 hidden max-w-sm text-sm text-white/90 sm:block">
            Clinical operations, patient tools, and administration — one trusted system.
          </p>
        </div>
      </div>
      <div className="bg-muted/30 flex flex-1 flex-col items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">{children}</div>
      </div>
    </div>
  )
}
