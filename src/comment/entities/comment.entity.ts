/* eslint-disable prettier/prettier */
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../../user/entities/user.entity";
import { Topic } from "../../topic/entities/topic.entity";

@Entity()
export class Comment {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    text: string;

    @ManyToOne(() => User, user=>user.comments)
    user: User;

    @ManyToOne(() => Topic, (topic) => topic.comments)
    topic: Topic;

}