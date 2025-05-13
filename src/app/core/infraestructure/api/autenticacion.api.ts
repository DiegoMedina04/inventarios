import { LoginResponse } from "../../domain/entities/loginResponse.entity";
import { LoginResponseDto } from "../dto/loginDto";
import { api } from "../http-client.config";

export class AutenticacionApi{ 
    async login(correo: string, clave: string): Promise<LoginResponse | null> {
        try {
          console.log('logueando')
          const {status,data}: { status: number; data: LoginResponseDto } = await api.post('/Authentication/Login', {
            "email":correo,
            "password":clave
          });
    
          if (status !== 200) {
            return null;
          }
          console.log({data})
          return data;
        } catch (error) {
          console.log({error});
          return null;
        }
      }
}