export class LoginResponse {
    code: number;
    data: {
      type: string;
      token: string;
    };
    messages: string[];
  
    constructor(code: number, data: { type: string; token: string }, messages: string[]) {
      this.code = code;
      this.data = data;
      this.messages = messages;
    }
  }