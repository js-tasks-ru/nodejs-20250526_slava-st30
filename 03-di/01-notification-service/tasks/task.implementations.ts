import { SenderEmail, SmsGateway } from "../notifications";

export class TasksSenderEmail implements SenderEmail {
  sendEmail(to: string, subject: string, message: string) {
    const text = `Email sent to ${to}: [${subject}] ${message}`;
    console.log(text);
    return text;
  }
}

export class TasksSmsGateway implements SmsGateway {
  sendSMS(to: string, message: string) {
    const text = `SMS sent to ${to}: ${message}`;
    console.log(text);
    return text;
  }
}