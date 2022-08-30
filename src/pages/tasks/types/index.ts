export type DescriptionState = {
  string: string;
  showMore: boolean;
};

export type Task = {
  title: string;
  createdAt: number;
  creator: string;
  _id: number;
  description: string;
  status: TaskStatus;
  importance: TaskImportance;
  user: User;
};

export enum TaskStatus {
  New = "NEW",
  InProcess = "IN PROGRESS",
  Finished = "FINISHED",
}

export enum TaskImportance {
  Low = "LOW",
  Medium = "MEDIUM",
  High = "HIGH",
}

type User = {
  userName: string;
};
