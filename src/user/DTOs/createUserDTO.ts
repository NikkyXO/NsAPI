/* eslint-disable prettier/prettier */
import { PartialType } from "@nestjs/mapped-types";
import { IsEmail, IsString } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

/* eslint-disable prettier/prettier */
export class createUserDTO {
    @ApiProperty({
        description: 'The username of the user',
        // minimum: 1,
        // default: 1,
        type: String // indicate the array type: { type: [String] }
    })
    @IsString()
    username: string;

    @ApiProperty()
    @IsEmail()
    email: string;

    @ApiProperty()
    @IsString()
    password: string;

}

export class updateUserDTO  extends PartialType(createUserDTO){

}