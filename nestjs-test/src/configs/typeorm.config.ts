import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as config from 'config';

const dbConfig = config.get('db');

export const typeORMconfig: TypeOrmModuleOptions = {
  type: dbConfig.type,
  host: process.env.RDS_HOSTNAME || dbConfig.host,
  port: process.env.PORT || dbConfig.port,
  username: process.env.RDS_USERNAME || dbConfig.username,
  password: process.env.RDS_PASSWORD || dbConfig.password,
  database: process.env.RDS_DB_NAME || dbConfig.database,
  // 엔티티를 이용해 데이터베이스 테이블을 생성해줍니다.
  // 그렇기에 엔티티 파일이 어디에 있는지 설정해 줍니다.
  entities: [__dirname + '/../**/*.entity.{js, ts}'],
  synchronize: dbConfig.synchronize,
};
