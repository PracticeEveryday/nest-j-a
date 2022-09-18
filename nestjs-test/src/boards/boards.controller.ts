import { BoardStatus } from './board-status.enum';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardStatusValidationPipe } from './pipes/board-status-validation.pipe';
import { Board } from './board.entity';

// 이 안엔 endpoint가 들어간다!
@Controller('boards')
export class BoardsController {
  constructor(private boardsService: BoardsService) {}

  // @Get('/')
  // getAllBoard(): Board[] {
  //   return this.boardsService.getAllBoards();
  // }

  @Post('/')
  @UsePipes(ValidationPipe)
  createBoard(@Body() createBoardDto: CreateBoardDto): Promise<Board> {
    return this.boardsService.createBoard(createBoardDto);
  }

  @Get('/:id')
  getBoardById(@Param('id') id: number): Promise<Board> {
    return this.boardsService.getBoardById(id);
  }

  // @Get('/:id')
  // getBoardById(@Param('id') id: string): Board {
  //   return this.boardsService.getBoardById(id);
  // }

  @Delete('/:id')
  deleteBoard(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.boardsService.deleteBoard(id);
  }

  // @Patch('/:id/status')
  // updateBoardStatus(
  //   @Param('id') id: string,
  //   @Body('status', BoardStatusValidationPipe) status: BoardStatus,
  // ): Board {
  //   return this.boardsService.updateBoardStatus(id, status);
  // }
}

/**
 * 1. boardService 파라미터에 BoardsService 객체를 타입으로 지정해줍니다.
 * 2. 이 boardsService 파라미터를 BoardsController 클래스 안에서 사용하기 위해 this.boardsService 프로퍼티에 boardsService 파라미터를 할당해 줍니다.
 * 3. 타입스크립트에서는 선언한 객체의 프로퍼티로 사용 가능 하기 때문에 boardsService: BoardsService로 선언헤 줍니다.
 * 4. 이렇게 갖게 된 boardsService 프로퍼티를 통해 BoardsController 클래스 안에서 활용을 할 수 있습니다.
 
@Controller('boards')
export class BoardsController {
  boardsService: BoardsService;

  constructor(boardsService: BoardsService) {
    this.boardsService = boardsService;
  }
}
 */

/**
 * 접근 제한자( public, protected, private )을 생성자( constructor ) 파라미터에 선언하면 접근 제한자가 사용된 파라미터는 암묵적으로 클래스 프로퍼티로 선언됩니다.
 *
 * private을 사용하면 클래스 내부에서만 사용 가능합니다.
 */
