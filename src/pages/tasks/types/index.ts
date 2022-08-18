export type DescriptionState = {
  string: string;
  showMore: boolean;
};

export type CardProps = {
  id: number;
  title: string;
  datatime: string;
  creator: string;
  description: string;
  type: string;
  priority: string;
};
