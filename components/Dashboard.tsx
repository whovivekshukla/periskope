import Link from "next/link";
import {
  Home,
  LineChart,
  Package,
  ShoppingCart,
  Users,
  File,
  Settings,
  Target,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";

import { ComboBox } from "./component/ComboBox";
import { TableComponent } from "./component/Table";
import { CardWithForm } from "./component/Card";
import { DataTable } from "./component/DataTable";

import Navbar from "./component/Navbar";

import { getTableData } from "@/lib/api";

export async function Dashboard() {
  // const data: TableData[] = [
  //   {
  //     groupname: "Sapphire Eagles",
  //     project: "Avalanche",
  //     labels: ["Development", "Design"],
  //     members: 10,
  //     lastactive: "2024-03-09",
  //   },
  //   {
  //     groupname: "Golden Phoenix",
  //     project: "Firestorm",
  //     labels: ["Marketing", "Research"],
  //     members: 6,
  //     lastactive: "2024-03-05",
  //   },
  //   {
  //     groupname: "Silver Tigers",
  //     project: "Thunderstrike",
  //     labels: ["Testing", "Analysis"],
  //     members: 8,
  //     lastactive: "2024-03-12",
  //   },
  //   {
  //     groupname: "Ruby Dragons",
  //     project: "Blizzard",
  //     labels: ["QA", "Documentation"],
  //     members: 7,
  //     lastactive: "2024-03-18",
  //   },
  //   {
  //     groupname: "Emerald Wolves",
  //     project: "Cyclone",
  //     labels: ["Support", "Training"],
  //     members: 12,
  //     lastactive: "2024-03-21",
  //   },
  //   {
  //     groupname: "Amber Bears",
  //     project: "Whirlwind",
  //     labels: ["Management", "Sales"],
  //     members: 9,
  //     lastactive: "2024-03-25",
  //   },
  //   {
  //     groupname: "Obsidian Lions",
  //     project: "Tornado",
  //     labels: ["Operations", "Security"],
  //     members: 11,
  //     lastactive: "2024-03-28",
  //   },
  //   {
  //     groupname: "Topaz Falcons",
  //     project: "Earthquake",
  //     labels: ["Integration", "Deployment"],
  //     members: 5,
  //     lastactive: "2024-03-03",
  //   },
  //   {
  //     groupname: "Diamond Bears",
  //     project: "Typhoon",
  //     labels: ["DevOps", "Optimization"],
  //     members: 8,
  //     lastactive: "2024-03-16",
  //   },
  //   {
  //     groupname: "Jade Falcons",
  //     project: "Hurricane",
  //     labels: ["Localization", "Customization"],
  //     members: 7,
  //     lastactive: "2024-03-22",
  //   },
  // ];
  const data = await getTableData();

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[190px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <ComboBox />
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <Home className="h-4 w-4" />
                Dashboard
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <ShoppingCart className="h-4 w-4" />
                Chats
                <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                  99+
                </Badge>
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary"
              >
                <Package className="h-4 w-4" />
                Groups{" "}
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <Users className="h-4 w-4" />
                Contacts
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <Target className="h-4 w-4" />
                Logs
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <File className="h-4 w-4" />
                Files
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <Settings className="h-4 w-4" />
                Settings
              </Link>
            </nav>
          </div>
          <div className="mt-auto p-4">
            <Link
              href="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <LineChart className="h-4 w-4" />
              Support
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <Navbar />
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
            <div className="col-span-1 lg:col-span-8 max-h-[500px]  overflow-auto">
              {/* <TableComponent /> */}

              <DataTable data={data} />
            </div>

            <div className="col-span-1 lg:col-span-4 ">
              <CardWithForm />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
