import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeORMconfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres_password',
  database: 'board-app',
  // 엔티티를 이용해 데이터베이스 테이블을 생성해줍니다.
  // 그렇기에 엔티티 파일이 어디에 있는지 설정해 줍니다.
  entities: [__dirname + '/../**/*.entity.{js, ts}'],
  synchronize: true,
};
