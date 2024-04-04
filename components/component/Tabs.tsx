import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "../ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function TabsDemo() {
  return (
    <Tabs defaultValue="overview" className="w-[300px]">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="members">Members</TabsTrigger>
        <TabsTrigger value="logs">Logs</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <Card>
          <CardHeader>
            <CardTitle>Overview</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex space-y-1">
              <div className="w-1/2">
                <Label>Last Active</Label>
              </div>
              <div className="w-1/2">
                <span className="temp-value">2 days ago</span>
              </div>
            </div>
            <div className="flex space-y-1">
              <div className="w-1/2">
                <Label>Disappearing Messages</Label>
              </div>
              <div className="w-1/2">
                <span className="temp-value">Off</span>
              </div>
            </div>
            <div className="flex space-y-1">
              <div className="w-1/2">
                <Label>Send Message Permission</Label>
              </div>
              <div className="w-1/2">
                <span className="temp-value">Everyone</span>
              </div>
            </div>
            <div className="flex space-y-1">
              <div className="w-1/2">
                <Label>Project</Label>
              </div>
              <div className="w-1/2">
                <span className="temp-value">#Demo</span>
              </div>
            </div>
            <div className="flex space-y-1">
              <div className="w-1/2">
                <Label>Labels</Label>
              </div>
              <div className="w-1/2">
                <span className="temp-value">
                  <Badge>one</Badge>
                  <Badge>two</Badge>
                  <Badge>three</Badge>
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="members">
        <Card>
          <CardHeader>
            <CardTitle>Members</CardTitle>
            <CardDescription>{/*TODO -  Member Description */}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            {/* TODO - Member Tab Content */}
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="logs">
        <Card>
          <CardHeader>
            <CardTitle>Logs</CardTitle>
            <CardDescription>{/* TODO - Logs Description */}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            {/* TODO - Logs Content */}
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
