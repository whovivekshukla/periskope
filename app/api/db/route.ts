import client from "@/lib/db";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const query = "SELECT * FROM tabledata";
    const result = await client.query(query);
    return NextResponse.json(result.rows);
  } catch (error) {
    console.error("Error executing query", error);
    return NextResponse.json({ error: "Error executing query" });
  }
};

export const POST = async () => {
  try {
    // Drop the table 'tabledata' if it exists
    const dropTableQuery = `DROP TABLE IF EXISTS tabledata`;
    await client.query(dropTableQuery);

    // Create the table 'tabledata'
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS tabledata (
        id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
        "groupName" VARCHAR(100),
        project VARCHAR(100),
        labels TEXT[],
        members INT,
        "lastActive" DATE
      )
    `;
    await client.query(createTableQuery);

    // Insert data into the 'tabledata' table
    const insertDataQuery = `
      INSERT INTO tabledata ("groupName", project, labels, members, "lastActive")
      VALUES 
        ('Sapphire Eagles', 'Avalanche', '{"Development", "Design"}', 10, '2024-03-09'),
        ('Golden Phoenix', 'Firestorm', '{"Marketing", "Research"}', 6, '2024-03-05'),
        ('Silver Tigers', 'Thunderstrike', '{"Testing", "Analysis"}', 8, '2024-03-12'),
        ('Ruby Dragons', 'Blizzard', '{"QA", "Documentation"}', 7, '2024-03-18'),
        ('Emerald Wolves', 'Cyclone', '{"Support", "Training"}', 12, '2024-03-21'),
        ('Amber Bears', 'Whirlwind', '{"Management", "Sales"}', 9, '2024-03-25'),
        ('Obsidian Lions', 'Tornado', '{"Operations", "Security"}', 11, '2024-03-28'),
        ('Topaz Falcons', 'Earthquake', '{"Integration", "Deployment"}', 5, '2024-03-03'),
        ('Diamond Bears', 'Typhoon', '{"DevOps", "Optimization"}', 8, '2024-03-16'),
        ('Jade Falcons', 'Hurricane', '{"Localization", "Customization"}', 7, '2024-03-22')
    `;
    await client.query(insertDataQuery);

    return NextResponse.json({
      message: "Table created and data inserted successfully",
    });
  } catch (error) {
    console.error("Error executing query", error);
    return NextResponse.json({ error: "Error executing query" });
  }
};
