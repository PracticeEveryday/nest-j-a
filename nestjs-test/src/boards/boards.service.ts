import { Injectable } from '@nestjs/common';
import { Board } from './board.model';

@Injectable()
export class BoardsService {
  // private를 하지 않으면 다른 컴포넌트에서 boards라는 배열 값을 수정 할 수 있음 그걸 차단하기 위해 private 사용
  private boards: Board[] = [];

  // return 값은 Board 배열값임
  getAllBoards(): Board[] {
    return this.boards;
  }
}
