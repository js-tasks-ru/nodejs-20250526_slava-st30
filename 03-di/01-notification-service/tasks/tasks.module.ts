import { Module } from "@nestjs/common";
import { TasksController } from "./tasks.controller";
import { TasksService } from "./tasks.service";
import { UsersService, UsersModule } from "../users";
import { NotificationsService, NotificationsModule } from "../notifications";
import { TasksSenderEmail, TasksSmsGateway } from './task.implementations';

@Module({
  imports: [
    NotificationsModule.register(new TasksSenderEmail, new TasksSmsGateway),
    UsersModule,
  ],
  controllers: [TasksController],
  providers: [TasksService, UsersService, NotificationsService],
})
export class TasksModule {}
