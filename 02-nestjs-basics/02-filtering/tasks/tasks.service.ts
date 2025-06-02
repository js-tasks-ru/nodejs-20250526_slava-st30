import { Injectable } from "@nestjs/common";
import { Task, TaskStatus } from "./task.model";

const TASK_STATUS_ORDER = [
  TaskStatus.PENDING,
  TaskStatus.IN_PROGRESS,
  TaskStatus.COMPLETED,
]

@Injectable()
export class TasksService {
  private tasks: Task[] = [
    {
      id: "1",
      title: "Task 1",
      description: "First task",
      status: TaskStatus.PENDING,
    },
    {
      id: "2",
      title: "Task 2",
      description: "Second task",
      status: TaskStatus.IN_PROGRESS,
    },
    {
      id: "3",
      title: "Task 3",
      description: "Third task",
      status: TaskStatus.COMPLETED,
    },
    {
      id: "4",
      title: "Task 4",
      description: "Fourth task",
      status: TaskStatus.PENDING,
    },
    {
      id: "5",
      title: "Task 5",
      description: "Fifth task",
      status: TaskStatus.IN_PROGRESS,
    },
  ];

  getFilteredTasks(
    status?: TaskStatus,
    page?: number,
    limit?: number,
    sortBy?: keyof Task,
  ): Task[] {
    const localPage = page ?? 1;
    const localLimit = limit ?? 10;

    const res: Task[] = this.tasks
      .filter(({ status: taskStatus }) => !status || taskStatus === status)
      .slice((localPage - 1) * localLimit, localLimit)
      .sort(sortBy !== 'status' ? undefined : (a, b): number => {
        const aOrder = TASK_STATUS_ORDER.indexOf(a.status);
        const bOrder = TASK_STATUS_ORDER.indexOf(b.status);
        return aOrder - bOrder;
      })
    
    return res;
  }
}
