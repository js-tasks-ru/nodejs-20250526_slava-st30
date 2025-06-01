import { Injectable, NotFoundException } from "@nestjs/common";
import { Task } from "./task.model";

@Injectable()
export class TasksService {
  private taskIdCounter = 1;

  generateIdForNewTask(): string {
    return String(this.taskIdCounter++);
  }

  private tasks: Task[] = [];

  getAllTasks(): Task[] {
    return this.tasks;
  }

  getTaskById(id: string): Task {
    const task = this.tasks.find(({ id: taskId }) => taskId === id);
    if (!task) throw new NotFoundException(`Task with id ${id} not found`);
    return task;
  } 

  createTask(task: Omit<Task, 'id'>): Task {
    const newTask = {
      ...task,
      id: this.generateIdForNewTask(),
    };
    this.tasks.push(newTask);
    return newTask;
  }

  updateTask(id: string, update: Partial<Omit<Task, 'id'>>): Task {
    const task = this.getTaskById(id);
    Object.keys(update).forEach((key) => { task[key] = update[key] });
    return task;
  }

  deleteTask(id: string): Task {
    const task = this.getTaskById(id);
    this.tasks = this.tasks.filter(({ id: taskId }) => id !== taskId);
    return task;
  }
}
