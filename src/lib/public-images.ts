/**
 * Curated healthcare photography (Unsplash) — professional hospital / clinical context.
 * Each key should map to a distinct photo ID where possible so sections match their headings.
 */
const q = "auto=format&fit=crop&q=80"

const photo = (id: string, w: number, h: number) =>
  `https://images.unsplash.com/photo-${id}?${q}&w=${w}&h=${h}`

export const publicImages = {
  /** Hero — clinician with patient, hospital setting */
  heroMain: photo("1576091160399-112ba8d25d1d", 1600, 1200),
  /** Modern hospital / clinic corridor */
  facility: photo("1519494026892-80bbd2d6fd0d", 1200, 800),
  /** Medical technology / monitoring — imaging & devices */
  technology: photo("1579684385127-1ef15d508118", 1200, 800),
  /** Compassionate care / nursing */
  patientCare: photo("1582719471384-894fbb16e074", 1200, 800),
  /** Surgical / team excellence — OR & procedural */
  medicalTeam: photo("1516574187841-cb9cc2ca948b", 1200, 800),
  /** Laboratory — microscopy & core lab */
  laboratory: photo("1576086213369-97a306d36557", 1200, 800),
  /** Pharmacy — medications & dispensing */
  pharmacy: photo("1587854692152-cbe660dbde88", 1200, 800),
  /** Emergency & rapid assessment */
  emergencyTriage: photo("1576091160550-2173dba999ef", 1200, 800),
  /** Cardiology / monitored cardiac care setting */
  cardiologyCare: photo("1582719478250-c89cae4dc85b", 1200, 800),
  /** Neurology / outpatient clinical evaluation */
  neurologyClinical: photo("1631217868264-e5b90bb7e133", 1200, 800),
  /** Lab bench — analyzers & scientific workflow */
  labBenchScience: photo("1559757148-5c350d0d3c56", 1200, 800),
  /** Phlebotomy / specimen collection */
  bloodCollection: photo("1530497610245-94d3c16cda28", 1200, 800),
} as const

const orthoPhoto = photo("1571019613454-1cb2f99b2d8b", 600, 400)
const pedPhoto = photo("1503454537195-1dcabb73ffb9", 600, 400)

/** One verified image per department id (no aliases to the same URL). */
export const departmentImageById: Record<string, string> = {
  cardio: publicImages.cardiologyCare,
  neuro: publicImages.neurologyClinical,
  ortho: orthoPhoto,
  ped: pedPhoto,
  er: publicImages.emergencyTriage,
  lab: publicImages.laboratory,
  rad: publicImages.technology,
  pharm: publicImages.pharmacy,
}

export type LaboratoryDiscipline = { title: string; image: string; imageAlt: string }

/** Distinct art per discipline; avoids repeating the same asset in every lab card. */
export const LABORATORY_DISCIPLINES: LaboratoryDiscipline[] = [
  {
    title: "Clinical chemistry",
    image: publicImages.labBenchScience,
    imageAlt: "Clinical chemistry laboratory with analyzers and reagents",
  },
  {
    title: "Hematology & coag",
    image: publicImages.bloodCollection,
    imageAlt: "Blood draw and hematology laboratory specimen handling",
  },
  {
    title: "Microbiology",
    image: publicImages.facility,
    imageAlt: "Controlled hospital laboratory environment for microbiology and culture work",
  },
  {
    title: "Molecular diagnostics",
    image: publicImages.technology,
    imageAlt: "Molecular diagnostics and advanced hospital instrumentation",
  },
  {
    title: "Pathology",
    image: publicImages.medicalTeam,
    imageAlt: "Hospital pathology and procedural medicine — tissue diagnosis workflow",
  },
]
