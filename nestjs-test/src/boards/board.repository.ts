import { CustomRepository } from 'src/db/typeorm-ex.decorator';
import { Repository } from 'typeorm';
import { BoardStatus } from './board-status.enum';
import { Board } from './board.entity';
import { CreateBoardDto } from './dto/create-board.dto';

// @EntityRepository()
// 클래스 사용자 정의 ( Custom ) 저장소로 선언하는 데 사용됩니다.
// 사용자 지정 저장소는 일부 특정 엔터티를 관리하거나 일반 저장소 일 수 있습니다. => Board 엔터티를 컨르롤 한다는 뜻
@CustomRepository(Board)
export class BoardRepository extends Repository<Board> {
  async createBoard(createBoardDto: CreateBoardDto): Promise<Board> {
    const { title, description } = createBoardDto;

    // 저장할 객체 생성
    const board = this.create({
      title,
      description,
      status: BoardStatus.PUBLIC,
    });

    await this.save(board);
    return board;
  }
}
