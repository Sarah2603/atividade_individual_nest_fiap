import { Injectable } from '@nestjs/common';
import { UpdateRegisterDTO } from './dto/updateRegister.dto';

@Injectable()
export class RegisterService {

	async create(): Promise<String> {
		return 'Usuário criado com sucesso!';
	}

	async findAll(): Promise<String> {
		return 'Lista de usuários!';
	}

	async findOne(id: number): Promise<String> {
		return `Usuário ${id} encontrado!`;
	}

	async update(id: number, req: UpdateRegisterDTO): Promise<String> {
		return `Usuário ${id} atualizado com sucesso!`;
	}
}
