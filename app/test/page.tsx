import { getTableData } from "@/lib/api";

const TestPage = async () => {
  const data = await getTableData();

  return <div>{JSON.stringify(data)}</div>;
};
export default TestPage;
