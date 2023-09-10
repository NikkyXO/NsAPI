import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { CommentModule } from './comment/comment.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TopicModule } from './topic/topic.module';
import config from 'ormconfig';

/* eslint-disable prettier/prettier */

@Module({
  imports: [UserModule, CommentModule, TypeOrmModule.forRoot(config), TopicModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
