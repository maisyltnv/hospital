import { PageHeader } from "@/components/hospital/page-header"
import { Card, CardContent } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const rows = [
  { code: "LAB-CHEM-LIPID", name: "Lipid panel", tat: "4h", sample: "Serum" },
  { code: "LAB-HEM-CBC", name: "CBC with differential", tat: "2h", sample: "Whole blood" },
  { code: "LAB-MOL-PCR", name: "Respiratory viral panel", tat: "24h", sample: "NP swab" },
]

export default function LabCatalogPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Lab test catalog" description="Map to LIS charge codes &amp; LOINC when integrating." />
      <Card className="shadow-sm">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Code</TableHead>
                <TableHead>Test</TableHead>
                <TableHead>Target TAT</TableHead>
                <TableHead>Sample</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {rows.map((r) => (
                <TableRow key={r.code}>
                  <TableCell className="font-mono text-xs">{r.code}</TableCell>
                  <TableCell>{r.name}</TableCell>
                  <TableCell>{r.tat}</TableCell>
                  <TableCell>{r.sample}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
