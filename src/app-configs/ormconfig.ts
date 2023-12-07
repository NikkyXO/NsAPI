// import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";

// import { join } from 'node:path';
import { User } from 'src/user/entities/user.entity';
import { Comment } from 'src/comment/entities/comment.entity';

import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';
import { Topic } from 'src/topic/entities/topic.entity';

const config: MysqlConnectionOptions = {
  //
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root', // Your MySQL username
  password: '410208?$olA',
  database: 'nest_test_schema',
  synchronize: true,
  logging: true,
  // entities: [__dirname + '/**/*.entity{.ts,.js}'],
  // entities: [join(__dirname, '**', '/entity/*.entity{.ts,.js}')],
  // entities: [ __dirname + '/../**/*.entity{.ts,.js}',],  NB: Try this if this works with new entities
  entities: [User, Comment, Topic],
  migrations: [__dirname + '/migrations/*.ts'],
};

export default config;

// const config: PostgresConnectionOptions = { //
//     type: 'postgres',
//     host: 'localhost',
//     port: 5432,
//     username: 'postgres',
//     password: 'postgres',
//     database: 'testDB',
//     synchronize: true, // set to false in production to avoid loosing data
//     logging: true,
//     entities: [__dirname + '/**/*.entity{.ts,.js}'],
//     migrations: [__dirname + '/migrations/*.ts'],

// }
