export interface LoginResponseDto {
    code: number;
    data: {
      type: string;
      token: string;
    };
    messages: string[];
  }