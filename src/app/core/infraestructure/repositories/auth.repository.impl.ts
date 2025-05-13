import { LoginResponse } from "../../domain/entities/loginResponse.entity";
import { LoginRepository } from "../../domain/repositories/loginResponse.repository";
import { AutenticacionApi } from "../api/autenticacion.api";


export class AuthRepositoryImpl implements LoginRepository{
    constructor(private autenticacionApi: AutenticacionApi = new AutenticacionApi()) {}
    login(correo: string, clave: string): Promise<LoginResponse | null> {
        return this.autenticacionApi.login(correo,clave);
    }
}