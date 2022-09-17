import { Module } from '@nestjs/common';
import { BoardsController } from './boards.controller';

@Module({
  controllers: [BoardsController], // 보드 모듈에 등록
})
export class BoardsModule {}
