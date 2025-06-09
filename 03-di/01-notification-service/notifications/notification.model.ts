export interface SenderEmail {
  sendEmail(to: string, subject: string, message: string): string
}

export interface SmsGateway {
  sendSMS(to: string, message: string): string
}