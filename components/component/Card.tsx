"use client";
import * as React from "react";
import { BarChart, Calendar, Dot } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TabsDemo } from "./Tabs";
import { Badge } from "../ui/badge";
import { ScrollArea } from "@radix-ui/react-scroll-area";

export function CardWithForm() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <div className="flex justify-between">
          <CardTitle>Evoque</CardTitle>
          <Button>Refresh</Button>
        </div>
      </CardHeader>
      <ScrollArea className="h-96 overflow-auto">
        <CardContent>
          <div>
            <TabsDemo />
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Export Chat</Button>
          <Button variant="destructive">Exit Group</Button>
        </CardFooter>
        <Card className="m-6">
          <CardHeader>
            <CardDescription>PER-011 | Evoke</CardDescription>
            <CardTitle>Issues with mention on groups</CardTitle>
          </CardHeader>
          <CardFooter>
            <Badge>
              <BarChart />
            </Badge>
            <Badge><Calendar/>Dec 22</Badge>
            <Badge><Dot/>Client</Badge>
          </CardFooter>
        </Card>
      </ScrollArea>
    </Card>
  );
}
