/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";


const config: PostgresConnectionOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'testDB',
    synchronize: true, // set to false in production to avoid loosing data
    logging: true,
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    migrations: [__dirname + '/migrations/*.ts'],

}

export default config;