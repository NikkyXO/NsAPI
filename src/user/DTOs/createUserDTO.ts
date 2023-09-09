/* eslint-disable prettier/prettier */
import { IsEmail, IsNumberString, IsString } from "class-validator";

/* eslint-disable prettier/prettier */
export class createUserDTO {
    @IsString()
    userName: string;

    @IsEmail()
    email: string;

    @IsNumberString()
    phoneNumber: string;

}