import { PublicPageHero } from "@/components/public/public-page-hero"
import { HOSPITAL } from "@/lib/constants"
import { publicImages } from "@/lib/public-images"

import { BookingWizard } from "./booking-wizard"

export default function BookAppointmentPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <PublicPageHero
        src={publicImages.patientCare}
        alt={`Schedule a visit at ${HOSPITAL.shortName}`}
        eyebrow="Patient access"
        title="Book your appointment with our hospital team"
        aspectClassName="aspect-[2/1] sm:aspect-[21/9]"
      />
      <BookingWizard />
    </div>
  )
}
