export type TableData = {
  groupName: string;
  project: string;
  labels: string[];
  members: number;
  lastActive: string;
};

export interface TableDataProps {
  data: TableData[];
}
