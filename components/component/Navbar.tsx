import Link from "next/link";
import {
  BarChart,
  Bell,
  CircleUser,
  Home,
  LineChart,
  Menu,
  Package,
  Package2,
  Search,
  ShoppingCart,
  Users,
  Circle,
  Group,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const comboBoxOptions = [
  {
    key: 1,
    value: "Periskope",
    label: "Periskope",
  },
  {
    key: 2,
    value: "Hashmail",
    label: "Hashmail",
  },
];

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ComboBox } from "./ComboBox";
import { ModeToggle } from "../ModeToggle";
import { Label } from "../ui/label";

const Navbar = () => {
  return (
    <div>
      <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="flex flex-col">
            <nav className="grid gap-2 text-lg font-medium">
              <ComboBox options={comboBoxOptions} />
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
                <LineChart className="h-4 w-4" />
                Logs
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <LineChart className="h-4 w-4" />
                Files
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <LineChart className="h-4 w-4" />
                Settings
              </Link>
            </nav>
            <div className="mt-auto">
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <LineChart className="h-4 w-4" />
                Support
              </Link>
            </div>
          </SheetContent>
        </Sheet>
        <div className="w-full flex-1 items-center">
          <Label className="flex items-center">
            <Group className="h-5 w-5 mr-2" />
            Groups
          </Label>
        </div>

        {/* <Button size="sm">
          <CircleHelp className="h-5 w-5" />
          Docs
        </Button> */}
        <Button variant="outline" size="sm">
          <Circle className="text-green-500" />
          +919004389372
        </Button>
        <Button variant="default" size="sm">
          <Bell className="h-5 w-5" />
        </Button>

        <ModeToggle />
      </header>
    </div>
  );
};
export default Navbar;
