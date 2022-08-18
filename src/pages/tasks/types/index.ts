export type DescriptionState = {
  string: string;
  showMore: boolean;
};

export type Task = {
  id: number;
  title: string;
  datatime: string;
  creator: string;
  description: string;
  type: TaskType;
  priority: TaskPriority;
};

export enum TaskType {
  New = "New",
  InProcess = "In Process",
  Finished = "Finished",
}

export enum TaskPriority {
  Low = "Low",
  Medium = "Medium",
  High = "High",
}
