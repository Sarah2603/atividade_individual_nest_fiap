import { Body, Controller, Post, Get, Param, ParseUUIDPipe, Patch, } from '@nestjs/common';
import { RegisterService } from './register.service';
import { CreateRegisterDTO } from './dto/createRegister.dto';
import { UpdateRegisterDTO } from './dto/updateRegister.dto';


@Controller('register')
export class RegisterController {
	constructor(private readonly registerService: RegisterService) {}


	@Post()
	create(@Body() req: CreateRegisterDTO) {
		return this.registerService.create();
	}

	@Get()
	findAll() {
		return this.registerService.findAll();
	}

	@Get(':id')
	findOne(@Param('id', ParseUUIDPipe) id: number ) {
		return this.registerService.findOne(id);
	}

	@Patch(':id')
	update(@Param('id', ParseUUIDPipe) id: number, @Body() req: UpdateRegisterDTO) {
		return this.registerService.update(id, req);
	}}


