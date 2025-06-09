import { Injectable, Inject } from "@nestjs/common";
import { SenderEmail, SmsGateway } from "./notification.model";

@Injectable()
export class NotificationsService {
  constructor(
    @Inject('SENDER_EMAIL') private readonly senderEmail: SenderEmail,
    @Inject('SMS_GATEWAY') private readonly smsGateway: SmsGateway,
  ) {}

  sendEmail(...args) {
    this.senderEmail.sendEmail.apply(this, args);
  }

  sendSMS(...args) {
    this.smsGateway.sendSMS.apply(this, args);
  }
}
