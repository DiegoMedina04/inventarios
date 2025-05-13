import { LoginResponse } from "../entities/loginResponse.entity";

export interface LoginRepository {
  login(correo: string, clave: string): Promise<LoginResponse | null>;
}