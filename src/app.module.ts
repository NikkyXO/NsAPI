import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { CommentModule } from './comment/comment.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TopicModule } from './topic/topic.module';
import { AuthModule } from './auth/auth.module';
import { LikesModule } from './likes/likes.module';
import config from './app-configs/ormconfig';
// import { databaseProviders } from './database.provider';

@Module({
  imports: [
    TypeOrmModule.forRoot({ ...config, autoLoadEntities: true }),
    UserModule,
    CommentModule,
    TopicModule,
    AuthModule,
    LikesModule,
  ],

  controllers: [AppController], // ...databaseProviders
  providers: [AppService], //  ...databaseProviders
})
export class AppModule {}

//NOTE:  when autoLoadEntities: true,
//  every entity registered through the forFeature() method will be
// automatically added to the entities array of the configuration object.
