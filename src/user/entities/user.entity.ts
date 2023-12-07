/* eslint-disable prettier/prettier */

import { BeforeInsert, Column, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Entity } from "typeorm/decorator/entity/Entity";
import * as bcrypt from 'bcrypt'
import { Comment} from '../../comment/entities/comment.entity'


@Entity('user')
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true, nullable: false})
    username: string;

    @Column({unique: true, nullable: false})
    email: string;

    @Column('text')
    description: string;

    @Column({nullable: false})
    password: string;

    @OneToMany(() => Comment, (comment) =>comment.user)
    comments: Comment[];

    @Column({ default: true })
    isActive: boolean;


    @BeforeInsert()
    async hashPassword() {
        this.password = await bcrypt.hash(this.password, 10);
    }


    
}