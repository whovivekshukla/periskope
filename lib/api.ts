export const getTableData = async () => {
  try {
    const response = await fetch(`${process.env.DEPLOYMENT_URL}/api/db`);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};
