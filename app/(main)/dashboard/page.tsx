import { CardWithForm } from "@/components/component/Card";
import { DataTable } from "@/components/component/DataTable";

import { getTableData } from "@/lib/api";
import { revalidatePath } from "next/cache";

const Dashboard = async () => {
  const data = await getTableData();
  revalidatePath("/dashboard");

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
