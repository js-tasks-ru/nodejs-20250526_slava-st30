import { Module, DynamicModule } from "@nestjs/common";
import { NotificationsService } from "./notifications.service";
import { SenderEmail, SmsGateway } from "./notification.model";

@Module({})
export class NotificationsModule {
  static register(senderEmail: SenderEmail, smsGateway: SmsGateway): DynamicModule {
    return {
      module: NotificationsModule,
      providers: [
        NotificationsService,
        {
          provide: 'SENDER_EMAIL',
          useValue: senderEmail,
        },
        {
          provide: 'SMS_GATEWAY',
          useValue: smsGateway,
        }
      ],
      exports: [
        NotificationsService,
        'SENDER_EMAIL',
        'SMS_GATEWAY',
      ],
    }
  }
}
