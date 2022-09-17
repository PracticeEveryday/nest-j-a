import { Injectable } from '@nestjs/common';
import { Board, BoardStatus } from './board.model';

import { v1 as uuid } from 'uuid';
@Injectable()
export class BoardsService {
  // private를 하지 않으면 다른 컴포넌트에서 boards라는 배열 값을 수정 할 수 있음 그걸 차단하기 위해 private 사용
  private boards: Board[] = [];

  // return 값은 Board 배열값임
  getAllBoards(): Board[] {
    return this.boards;
  }

  createBoard(title: string, description: string) {
    const board: Board = {
      id: uuid(),
      title,
      description,
      status: BoardStatus.PUBLIC,
    };

    this.boards.push(board);
    return board;
  }
}
