import { Module } from '@nestjs/common';
import { BoardsController } from './boards.controller';
import { BoardsService } from './boards.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardRepository } from './board.repository';
import { TypeOrmExModule } from 'src/db/typeorm-ex.module';

// 생성한 Repository를 다른 곳에서도 사용할 수 있게 하기 위해 ( Injectable ) board.module에서도 import해줍니다!!
@Module({
  imports: [TypeOrmExModule.forCustomRepository([BoardRepository])],
  controllers: [BoardsController],
  providers: [BoardsService], // 보드 모듈에 등록
})
export class BoardsModule {}
