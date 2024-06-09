import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export function TemplatesCard() {
  return (
    <Card className="xl:col-span-2">
      <CardHeader className="flex flex-row items-center">
        <div className="grid gap-2">
          <CardTitle>Contract templates</CardTitle>
          <CardDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
          </CardDescription>
        </div>
        <Button asChild size="sm" className="ml-auto gap-1">
          <Link href="#">
            New Contract Template
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Button>
      </CardHeader>
      <CardContent>
        <Table>

          <TableBody>

            <TableRow>
              <TableCell>
                <Link href="#">
                  <div className="font-medium">Sample Consulting Agreement</div>
                </Link>
              </TableCell>
              <TableCell className="text-right">04 June 2024, 5:12 pm</TableCell>
            </TableRow>


            <TableRow>
              <TableCell>
                <Link href="#">
                  <div className="font-medium">Sample Service Agreement</div>
                </Link>
              </TableCell>
              <TableCell className="text-right">04 June 2024, 5:12 pm</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Link href="#">
                  <div className="font-medium">my test contract</div>
                </Link>
              </TableCell>
              <TableCell className="text-right">04 June 2024, 5:12 pm</TableCell>
            </TableRow>

          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
