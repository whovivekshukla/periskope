import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "../ui/badge";
import { Card } from "../ui/card";

const mockData = [
  {
    groupName: "Evoke",
    project: "#Demo",
    labels: ["one", "two"],
    members: 10,
    lastActive: "2024-01-01",
  },
  {
    groupName: "Illuminate",
    project: "#NewFeature",
    labels: ["three", "four"],
    members: 8,
    lastActive: "2024-02-15",
  },
  {
    groupName: "Spark",
    project: "#Launch",
    labels: ["five", "six"],
    members: 15,
    lastActive: "2024-03-10",
  },
  {
    groupName: "Phoenix Rising",
    project: "#Alpha",
    labels: ["alpha", "beta"],
    members: 5,
    lastActive: "2024-04-22",
  },
  {
    groupName: "Mystic Minds",
    project: "#Enigma",
    labels: ["enigma", "mystery"],
    members: 12,
    lastActive: "2024-05-11",
  },
  {
    groupName: "Vivid Visionaries",
    project: "#Dreamscape",
    labels: ["dream", "vision"],
    members: 7,
    lastActive: "2024-06-30",
  },
  {
    groupName: "Harmony Creators",
    project: "#Symphony",
    labels: ["harmony", "melody"],
    members: 9,
    lastActive: "2024-07-17",
  },
  {
    groupName: "Infinite Innovations",
    project: "#Infinity",
    labels: ["infinite", "limitless"],
    members: 14,
    lastActive: "2024-08-05",
  },
  {
    groupName: "Noble Navigators",
    project: "#Odyssey",
    labels: ["noble", "journey"],
    members: 6,
    lastActive: "2024-09-18",
  },
  {
    groupName: "Celestial Explorers",
    project: "#Aurora",
    labels: ["celestial", "explore"],
    members: 11,
    lastActive: "2024-10-03",
  },
  {
    groupName: "Renaissance Rebels",
    project: "#Revolution",
    labels: ["renaissance", "revolution"],
    members: 8,
    lastActive: "2024-11-28",
  },
  {
    groupName: "Legacy Legends",
    project: "#Mythos",
    labels: ["legacy", "legend"],
    members: 13,
    lastActive: "2024-12-15",
  },
  {
    groupName: "Empyrean Enigmas",
    project: "#Puzzle",
    labels: ["empyrean", "puzzle"],
    members: 7,
    lastActive: "2025-01-29",
  },
  {
    groupName: "Everlasting Epics",
    project: "#Saga",
    labels: ["everlasting", "epic"],
    members: 9,
    lastActive: "2025-02-14",
  },
  {
    groupName: "Fabled Frontiers",
    project: "#Frontier",
    labels: ["fabled", "frontier"],
    members: 16,
    lastActive: "2025-03-07",
  },
];

export function TableComponent() {
  return (
    <Card>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Group Name</TableHead>
            <TableHead>Project</TableHead>
            <TableHead>Labels</TableHead>
            <TableHead>Members</TableHead>
            <TableHead className="text-right">Last Active</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mockData.map((data) => (
            <TableRow key={data.groupName}>
              <TableCell className="font-medium">{data.groupName}</TableCell>
              <TableCell className="font-medium">{data.project}</TableCell>
              <TableCell>
                {data.labels.map((label) => (
                  <Badge className="mx-1">{label}</Badge>
                ))}
              </TableCell>
              <TableCell>{data.members}</TableCell>
              <TableCell className="text-right">{data.lastActive}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}
