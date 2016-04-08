interface Email {
  from: string
  to: string
  cc?: string
  subject: string
  content: string
}

interface EmailSender {
  send(email:Email): boolean
}

abstract class APIBasedService {
  constructor(public apiKey:string) {
  }
}

class MailgunEmailSender extends APIBasedService implements EmailSender {

  send(email:Email):boolean {
    console.log(`Sending email via Mailgun using API key: ${this.apiKey}`);
    console.log(`Email: ${JSON.stringify(email, null, ' ')}`);
    return MailgunEmailSender.randomizeResult();
  }

  private static randomizeResult():boolean {
    return Math.round(Math.random() * 1000) % 2 === 0;
  }
}


let email:Email = {from: 'mostr@sml.com', to: 'fm@sml.com', subject: 'TS ftw!', content: 'Yeah, right...'};
let mg = new MailgunEmailSender('abc123');
mg.send(email);
