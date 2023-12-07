// // import { ClassProvider } from '@nestjs/common/interfaces';
// import config from 'src/app-configs/ormconfig';
// import { DataSource } from 'typeorm';

// export const databaseProviders = [
//   {
//     provide: 'DATA_SOURCE',
//     useFactory: async () => {
//       const dataSource = new DataSource(config);

//       return dataSource.initialize();
//     },
//   },
// ];
