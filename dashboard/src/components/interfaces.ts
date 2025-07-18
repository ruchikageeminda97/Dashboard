export interface TaskCardProps {
  title: string;
  priority: string;
  assignedCount: number;
  dueDate?: string;
  reports?: string;
  bgColor?: string;
  id: string;
  onDragStart?: (e: React.DragEvent<HTMLDivElement>) => void;
}

export interface TaskCard2Props {
  title: string;
  priority: string;
  assignedCount: number;
  dueDate?: string;
  reports?: string;
  bgColor?: string;
  image?: boolean;
  id: string;
  onDragStart?: (e: React.DragEvent<HTMLDivElement>) => void;
}

export interface Task {
  id: string;
  title: string;
  priority: string;
  assignedCount: number;
  dueDate?: string;
  reports?: string;
  bgColor?: string;
  image?: boolean;
  lane: string;
}