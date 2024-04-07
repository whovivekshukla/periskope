import { CardWithForm } from "@/components/component/Card";
import { DataTable } from "@/components/component/DataTable";

import { getTableData } from "@/lib/api";
import { revalidatePath } from "next/cache";
import { TableData } from "@/lib/types";

const Dashboard = async () => {
  const data: TableData[] = [
    {
      groupName: "Sapphire Eagles",
      project: "Avalanche",
      labels: ["Development", "Design"],
      members: 10,
      lastActive: "2024-03-09",
    },
    {
      groupName: "Golden Phoenix",
      project: "Firestorm",
      labels: ["Marketing", "Research"],
      members: 6,
      lastActive: "2024-03-05",
    },
    {
      groupName: "Silver Tigers",
      project: "Thunderstrike",
      labels: ["Testing", "Analysis"],
      members: 8,
      lastActive: "2024-03-12",
    },
    {
      groupName: "Ruby Dragons",
      project: "Blizzard",
      labels: ["QA", "Documentation"],
      members: 7,
      lastActive: "2024-03-18",
    },
    {
      groupName: "Emerald Wolves",
      project: "Cyclone",
      labels: ["Support", "Training"],
      members: 12,
      lastActive: "2024-03-21",
    },
    {
      groupName: "Amber Bears",
      project: "Whirlwind",
      labels: ["Management", "Sales"],
      members: 9,
      lastActive: "2024-03-25",
    },
    {
      groupName: "Obsidian Lions",
      project: "Tornado",
      labels: ["Operations", "Security"],
      members: 11,
      lastActive: "2024-03-28",
    },
    {
      groupName: "Topaz Falcons",
      project: "Earthquake",
      labels: ["Integration", "Deployment"],
      members: 5,
      lastActive: "2024-03-03",
    },
    {
      groupName: "Diamond Bears",
      project: "Typhoon",
      labels: ["DevOps", "Optimization"],
      members: 8,
      lastActive: "2024-03-16",
    },
    {
      groupName: "Jade Falcons",
      project: "Hurricane",
      labels: ["Localization", "Customization"],
      members: 7,
      lastActive: "2024-03-22",
    },
  ];

  // revalidatePath("/dashboard");

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
        <div className="col-span-1 lg:col-span-8 max-h-[500px]  overflow-auto">
          <DataTable data={data} />
        </div>

        <div className="col-span-1 lg:col-span-4 ">
          <CardWithForm />
        </div>
      </div>
    </main>
  );
};
export default Dashboard;
