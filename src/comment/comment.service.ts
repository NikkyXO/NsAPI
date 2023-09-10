/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class CommentService {

    getCommentById(id: string) {
        return `This action returns a "${id}" comment`;
    }
    
}
