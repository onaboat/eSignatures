

import Image from "next/image"
import Link from "next/link"
import {
  ChevronLeft,
  ChevronRight,
  Copy,
  CreditCard,
  CircleDollarSign,
  LayoutTemplate,
  SquareFunction,
  File,
  FileDown,
  Home,
  LineChart,
  ListFilter,
  PanelLeft,
  Search,
  Settings,
  Palette,
  Users2,
  ReceiptText,
  FilePenLine,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Label } from "@/components/ui/label";
import { TemplatesCard } from "@/components/TemplatesCard"
import { PaginationFeature } from "@/components/PaginationFeature"







export default function Dashboard() {
  return (
    <>
      <TooltipProvider>
        <div className="flex min-h-screen w-full flex-col bg-muted/40">
          <aside className="fixed inset-y-0 left-0 z-10 hidden w-48 flex-col border-r bg-background sm:flex">
            <nav className="flex flex-col  gap-4 px-2 sm:py-5">

              <Image src="/esignaturesio-logo-with-text-20240205-76d96ff958ab8241a45f8af1d425a8ec4d6e95438345afb4de9c6d3c527e1617.png"
                width={140}
                height={29}
                alt="eSignatures"
                className="gap-4 px-2.5"
              />

              <Link
                href="#"
                className="flex items-center gap-4 px-2.5 text-primary   hover:text-foreground"
              >
                $30.20
              </Link>
              <Link
                href="#"
                className="flex items-center gap-4 px-2.5 text-foreground"
              >
                <Home className="h-5 w-5" />
                Dashboard
              </Link>
              <Link
                href="#"
                className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
              >
                <LayoutTemplate className="h-5 w-5" />
                Templates
              </Link>
              <Link
                href="#"
                className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
              >
                <SquareFunction className="h-5 w-5" />
                Automation
              </Link>
              <Link
                href="#"
                className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
              >
                <Palette className="h-5 w-5" />
                Branding
              </Link>
              <Link
                href="#"
                className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
              >
                <CircleDollarSign className="h-5 w-5" />
                Billing
              </Link>
              <Link
                href="#"
                className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
              >
                <Users2 className="h-5 w-5" />
                Users
              </Link>

            </nav>
            <nav className="mt-auto flex flex-col gap-4 px-2 sm:py-5">

              <Link
                href="#"
                className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
              >
                <Settings className="h-5 w-5" />
                Settings
              </Link>



            </nav>
          </aside>
          <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-48">
            <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
              <Sheet>
                
                <SheetTrigger asChild>
                  <Button size="icon" variant="outline" className="sm:hidden">
                    <PanelLeft className="h-5 w-5" />
                    <span className="sr-only">Toggle Menu</span>
                    
                  </Button>
                  
                </SheetTrigger>

                <Image src="/esignaturesio-logo-with-text-20240205-76d96ff958ab8241a45f8af1d425a8ec4d6e95438345afb4de9c6d3c527e1617.png"
                      width={140}
                      height={29}
                      alt="eSignatures"
                      className="sm:hidden"
                    />
               
                <SheetContent side="left" className="sm:max-w-xs">
               
                  <nav className="grid gap-6 text-lg font-medium">

                    <Image src="/esignaturesio-logo-with-text-20240205-76d96ff958ab8241a45f8af1d425a8ec4d6e95438345afb4de9c6d3c527e1617.png"
                      width={140}
                      height={29}
                      alt="eSignatures"
                      className="gap-4 px-2.5"
                    />

                    <Link
                      href="#"
                      className="flex items-center gap-4 px-2.5 text-primary   hover:text-foreground"
                    >
                      $30.20
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center gap-4 px-2.5 text-foreground"
                    >
                      <Home className="h-5 w-5" />
                      Dashboard
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                    >
                      <LayoutTemplate className="h-5 w-5" />
                      Templates
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                    >
                      <SquareFunction className="h-5 w-5" />
                      Automation
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                    >
                      <Palette className="h-5 w-5" />
                      Branding
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                    >
                      <CircleDollarSign className="h-5 w-5" />
                      Billing
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                    >
                      <Users2 className="h-5 w-5" />
                      Users
                    </Link>
                  </nav>
                </SheetContent>
              </Sheet>
              <Breadcrumb className="hidden md:flex">
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link href="#">eSignatures</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Dashboard</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>

            </header>
            <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-2 xl:grid-cols-2">
              <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4">


                  <Card className="sm:col-span-2 bg-primary text-primary-foreground drop-shadow-lg" x-chunk="dashboard-05-chunk-0">
                    <CardHeader>
                      <CardTitle>Create new contract</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Label htmlFor="category" className="text-white">I would like to</Label>

                      <Select>
                        <SelectTrigger id="category" aria-label="Send a new contract">
                          <SelectValue placeholder="Send a new contract" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="clothing">Send a new contract</SelectItem>
                          <SelectItem value="electronics">Bulk send contracts</SelectItem>
                          <SelectItem value="accessories">Create a Contract link</SelectItem>
                        </SelectContent>
                      </Select>



                      <Label htmlFor="category" className="text-white">Using this template</Label>
                      <Select >
                        <SelectTrigger id="category" aria-label="-Blank Contract">
                          <SelectValue placeholder="-Blank Contract" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="clothing">-Blank Contract</SelectItem>
                          <SelectItem value="electronics">Sample Consulting Agreement</SelectItem>
                          <SelectItem value="accessories">Sample Service Agreement</SelectItem>
                        </SelectContent>
                      </Select>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full" variant="secondary">Start</Button>
                    </CardFooter>
                  </Card>

                  <Card x-chunk="dashboard-05-chunk-1" className="flex flex-col justify-center">
                    <CardHeader className="pb-2">
                      <CardDescription className="text-2xl">
                        <ReceiptText className="h-5 w-5" /> Sent Contracts
                      </CardDescription>
                      <CardTitle className="text-4xl">210</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-xs text-muted-foreground">
                        +25% from last week
                      </div>
                    </CardContent>
                    <CardFooter>
                      <div className="flex flex-col">

                        <div className="text-xs text-muted-foreground">
                          Viewed contracts % of Sent contracts
                        </div>
                        <Progress value={25} aria-label="25% increase" />
                      </div>
                    </CardFooter>
                  </Card>

                  <Card x-chunk="dashboard-05-chunk-2" className="flex flex-col justify-center">
                    <CardHeader className="pb-2">
                      <CardDescription className="text-2xl">
                        <FilePenLine className="h-5 w-5" /> Signed Contracts
                      </CardDescription>
                      <CardTitle className="text-4xl">105</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-xs text-muted-foreground">
                        +15% from last week
                      </div>
                    </CardContent>
                    <CardFooter>
                      <div className="flex flex-col">

                        <div className="text-xs text-muted-foreground">
                          Signed contracts % of Sent contracts
                        </div>
                        <Progress value={50} aria-label="25% increase" />
                      </div>
                    </CardFooter>
                  </Card>

                </div>

                <Tabs defaultValue="week">
                  <div className="flex items-center">
                    <TabsList>
                      <TabsTrigger value="week">Week</TabsTrigger>
                      <TabsTrigger value="month">Month</TabsTrigger>
                      <TabsTrigger value="year">Year</TabsTrigger>
                      <div className="relative">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                          type="search"
                          placeholder="Search contracts..."
                          className="h-9 gap-1 w-full appearance-none bg-background pl-8 shadow-none "
                        />
                      </div>
                    </TabsList>





                    <div className="ml-auto flex items-center gap-2">

                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="outline"
                            size="sm"
                            className="h-7 gap-1 text-sm"
                          >
                            <ListFilter className="h-3.5 w-3.5" />
                            <span className="sr-only sm:not-sr-only">Filter</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuCheckboxItem checked >
                            All
                          </DropdownMenuCheckboxItem>
                          <DropdownMenuCheckboxItem >
                            Draft
                          </DropdownMenuCheckboxItem>
                          <DropdownMenuCheckboxItem >
                            Sent
                          </DropdownMenuCheckboxItem>
                          <DropdownMenuCheckboxItem>
                            Signed
                          </DropdownMenuCheckboxItem>
                          <DropdownMenuCheckboxItem>
                            Expired
                          </DropdownMenuCheckboxItem>
                          <DropdownMenuCheckboxItem>
                            Withdrawn
                          </DropdownMenuCheckboxItem>
                          <DropdownMenuCheckboxItem>
                            Archived
                          </DropdownMenuCheckboxItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                      <Button
                        size="sm"
                        variant="outline"
                        className="h-7 gap-1 text-sm"
                      >
                        <File className="h-3.5 w-3.5" />
                        <span className="sr-only sm:not-sr-only">Export</span>
                      </Button>
                    </div>
                  </div>

                  <Card x-chunk="dashboard-05-chunk-3">
                    <CardHeader className="">
                      <CardTitle>Contracts
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Contract Name</TableHead>
                            <TableHead className="hidden sm:table-cell">

                            </TableHead>
                            <TableHead className="hidden sm:table-cell">
                              Status
                            </TableHead>
                            <TableHead className="hidden sm:table-cell">
                              Date
                            </TableHead>
                            <TableHead className="">File</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow className="bg-accent">
                            <TableCell>
                              Contract for Acmi Inc for design
                            </TableCell>
                            <TableCell className="hidden sm:table-cell">
                              <div className="font-medium">Liam Johnson</div>
                              <div className="hidden text-sm text-muted-foreground md:inline">
                                Liam.j@acmi.com.au
                              </div>

                            </TableCell>
                            <TableCell className="">
                              <Badge className="text-xs bg-black">
                                Sent
                              </Badge>
                            </TableCell>
                            <TableCell className="hidden sm:table-cell">
                              2023-06-24
                            </TableCell>
                            <TableCell className="hidden sm:table-cell">
                              <FileDown />
                            </TableCell>
                          </TableRow>

                          <TableRow className="">
                            <TableCell>
                              Contract is placeholder text commonly
                            </TableCell>
                            <TableCell className="hidden sm:table-cell">
                              <div className="font-medium">John Mush</div>
                              <div className="hidden text-sm text-muted-foreground md:inline">
                                JohnMush@gmail.com
                              </div>
                            </TableCell>
                            <TableCell className="">
                              <Badge variant="secondary" className="text-xs ">
                                Viewed
                              </Badge>
                            </TableCell>
                            <TableCell className="hidden sm:table-cell">
                              2023-06-24
                            </TableCell>
                            <TableCell className="hidden sm:table-cell">
                              <FileDown />
                            </TableCell>
                          </TableRow>

                          <TableRow className="bg-accent">
                            <TableCell>
                              Contract for used in the graphic, print, and
                            </TableCell>
                            <TableCell className="hidden sm:table-cell">
                              <div className="font-medium">Ben Jackson</div>
                              <div className="hidden text-sm text-muted-foreground md:inline">
                                Ben.j@onlineprint.com.au
                              </div>
                            </TableCell>
                            <TableCell className="">
                              <Badge variant="outline" className="text-xs bg-lime-300">
                                Signed
                              </Badge>
                            </TableCell>
                            <TableCell className="hidden sm:table-cell">
                              2023-06-24
                            </TableCell>
                            <TableCell className="hidden sm:table-cell">
                              <FileDown />
                            </TableCell>
                          </TableRow>


                          <TableRow className="">
                            <TableCell>
                              Acmi Inc - Design contract
                            </TableCell>
                            <TableCell className="hidden sm:table-cell">
                              <div className="font-medium">Mark Smith</div>
                              <div className="hidden text-sm text-muted-foreground md:inline">
                                S.Mark@design.co.uk
                              </div>
                            </TableCell>
                            <TableCell className="">
                              <Badge variant="secondary" className="text-xs ">
                                Viewed
                              </Badge>
                            </TableCell>
                            <TableCell className="hidden sm:table-cell">
                              2023-06-24
                            </TableCell>
                            <TableCell className="hidden sm:table-cell">
                              <FileDown />
                            </TableCell>
                          </TableRow>

                          <TableRow className="bg-accent">
                            <TableCell>
                              Contract for Professinal
                            </TableCell>
                            <TableCell className="hidden sm:table-cell">
                              <div className="font-medium">Liam Johnson</div>
                              <div className="hidden text-sm text-muted-foreground md:inline">
                                Liam.j@acmi.com.au
                              </div>
                            </TableCell>
                            <TableCell className="">
                              <Badge className="text-xs bg-black">
                                Sent
                              </Badge>
                            </TableCell>
                            <TableCell className="hidden sm:table-cell">
                              2023-06-24
                            </TableCell>
                            <TableCell className="hidden sm:table-cell">
                              <FileDown />
                            </TableCell>
                          </TableRow>

                          <TableRow className="">
                            <TableCell>
                              My Contract for this
                            </TableCell>
                            <TableCell className="hidden sm:table-cell">
                              <div className="font-medium">Sarah Parker</div>
                              <div className="hidden text-sm text-muted-foreground md:inline">
                                sp@homethere.com
                              </div>
                            </TableCell>
                            <TableCell className="">
                              <Badge variant="secondary" className="text-xs ">
                                Viewed
                              </Badge>
                            </TableCell>
                            <TableCell className="hidden sm:table-cell">
                              2023-06-24
                            </TableCell>
                            <TableCell className="hidden sm:table-cell">
                              <FileDown />
                            </TableCell>
                          </TableRow>

                          <TableRow className="bg-accent">
                            <TableCell>
                              Contract for Acmi Inc for design
                            </TableCell>
                            <TableCell className="hidden sm:table-cell">
                              <div className="font-medium">Liam Johnson</div>
                              <div className="hidden text-sm text-muted-foreground md:inline">
                                Liam.j@acmi.com.au
                              </div>
                            </TableCell>
                            <TableCell className="">
                              <Badge variant="outline" className="text-xs bg-lime-300">
                                Signed
                              </Badge>
                            </TableCell>
                            <TableCell className="hidden sm:table-cell">
                              2023-06-24
                            </TableCell>
                            <TableCell className="hidden sm:table-cell">
                              <FileDown />
                            </TableCell>
                          </TableRow>


                          <TableRow className="">
                            <TableCell>
                              Second contract for AMII
                            </TableCell>
                            <TableCell className="hidden sm:table-cell">
                              <div className="font-medium">Paul Winters</div>
                              <div className="hidden text-sm text-muted-foreground md:inline">
                                Paul.j.winters@onetwothree.com.au
                              </div>
                            </TableCell>
                            <TableCell className="">
                              <Badge variant="secondary" className="text-xs">
                                Viewed
                              </Badge>
                            </TableCell>
                            <TableCell className="hidden sm:table-cell">
                              2023-06-24
                            </TableCell>
                            <TableCell className="hidden sm:table-cell">
                              <FileDown />
                            </TableCell>
                          </TableRow>

                        </TableBody>
                      </Table>
                    </CardContent>

                    <CardFooter className="justify-center border-t p-4">
                      <PaginationFeature />
                    </CardFooter>
                  </Card>
                </Tabs>
              </div>
              <TemplatesCard />
          
            </main>
          </div>
        </div>
      </TooltipProvider>
    </>
  );
}
