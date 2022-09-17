import { Injectable, NotFoundException } from '@nestjs/common';
import { Board, BoardStatus } from './board.model';

import { v1 as uuid } from 'uuid';
import { CreateBoardDto } from './dto/create-board.dto';
@Injectable()
export class BoardsService {
  // private를 하지 않으면 다른 컴포넌트에서 boards라는 배열 값을 수정 할 수 있음 그걸 차단하기 위해 private 사용
  private boards: Board[] = [];

  // return 값은 Board 배열값임
  getAllBoards(): Board[] {
    return this.boards;
  }

  createBoard(createBoardDto: CreateBoardDto) {
    const { title, description } = createBoardDto;

    const board: Board = {
      id: uuid(),
      title,
      description,
      status: BoardStatus.PUBLIC,
    };

    this.boards.push(board);
    return board;
  }

  getBoardById(id: string): Board {
    const found = this.boards.find((board) => board.id === id);
    if (!found) {
      throw new NotFoundException(`Can't find Board with id ${id}`);
    }

    return found;
  }

  deleteBoard(id: string): void {
    const found = this.getBoardById(id);
    // filter 같지 않은 건 버리기! 같지 않은 건 필터 해라
    // 찾았으면 찾은 게시물의 ID를 지워라!
    this.boards = this.boards.filter((board) => board.id !== found.id);
  }

  updateBoardStatus(id: string, status: BoardStatus): Board {
    const board = this.getBoardById(id);
    board.status = status;

    return board;
  }
}
