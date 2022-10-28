import { IsNotEmpty, IsString, IsEmail, MinLength, MaxLength, IsMobilePhone, IsUrl, IsPhoneNumber } from "class-validator";

export class CreateRegisterDTO {
	@IsString()
	@IsNotEmpty()
	name: string;

	@IsEmail()
	@IsNotEmpty()
	email: string;

	@IsNotEmpty()
	@MinLength(6)
	@MaxLength(20)
	password: string;

	
	@IsUrl()
	@IsNotEmpty()
	site: string;

	@IsPhoneNumber()
	phone: string;

	
}