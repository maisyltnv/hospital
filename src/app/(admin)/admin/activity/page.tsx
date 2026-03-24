import { mockAuditLog } from "@/lib/data"
import { PageHeader } from "@/components/hospital/page-header"
import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Card, CardContent } from "@/components/ui/card"

export default function ActivityPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Activity monitor"
        description="High-signal audit events for break-glass access, bulk exports, and integration retries."
      />
      <Card className="shadow-sm">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Timestamp</TableHead>
                <TableHead>Actor</TableHead>
                <TableHead>Action</TableHead>
                <TableHead>Resource</TableHead>
                <TableHead>IP</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockAuditLog.map((a) => (
                <TableRow key={a.id}>
                  <TableCell className="whitespace-nowrap text-xs">{a.at}</TableCell>
                  <TableCell>{a.user}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{a.action}</Badge>
                  </TableCell>
                  <TableCell className="max-w-md truncate text-xs">{a.resource}</TableCell>
                  <TableCell className="font-mono text-xs">{a.ip}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
