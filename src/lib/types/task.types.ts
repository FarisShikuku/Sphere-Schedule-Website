export type TaskPriority = 'low' | 'medium' | 'high';
export type TaskStatus = 'todo' | 'in-progress' | 'done' | 'blocked';

export interface Task {
  id: string;
  title: string;
  description?: string;
  project?: string;
  dueDate: Date;
  dueTime?: string;
  priority: TaskPriority;
  status: TaskStatus;
  tags?: string[];
  createdAt: Date;
  updatedAt: Date;
  userId: string;
  completedAt?: Date;
  subtasks?: Subtask[];
}

export interface Subtask {
  id: string;
  title: string;
  completed: boolean;
}

export interface TaskFilters {
  status?: TaskStatus;
  priority?: TaskPriority;
  search?: string;
  project?: string;
  dueDate?: Date;
}