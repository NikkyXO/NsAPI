/* eslint-disable prettier/prettier */
import { PartialType } from "@nestjs/mapped-types";
import { IsEmail, IsString } from "class-validator";

/* eslint-disable prettier/prettier */
export class createUserDTO {
    @IsString()
    username: string;

    @IsEmail()
    email: string;

    @IsString()
    password: string;

}

export class updateUserDTO  extends PartialType(createUserDTO){

}