export type DescriptionState = {
  string: string;
  showMore: boolean;
};

export type Task = {
  title: string;
  datatime: string;
  creator: string;
  id: number;
  description: string;
  status: TaskStatus;
  importance: TaskImportance;
};

export enum TaskStatus {
  New = "NEW",
  InProcess = "IN PROCESS",
  Finished = "FINISHED",
}

export enum TaskImportance {
  Low = "LOW",
  Medium = "MEDIUM",
  High = "HIGH",
}
