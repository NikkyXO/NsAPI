/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    
    createNewUser() {

    }

    getUserById(id: string) {
        return {
            id: id,
        }
    }

    getAllUsers() {

    }
}
