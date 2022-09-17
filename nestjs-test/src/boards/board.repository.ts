import { EntityRepository, Repository } from 'typeorm';
import { Board } from './board.entity';

// @EntityRepository()
// 클래스 사용자 정의 ( Custom ) 저장소로 선언하는 데 사용됩니다.
// 사용자 지정 저장소는 일부 특정 엔터티를 관리하거나 일반 저장소 일 수 있습니다. => Board 엔터티를 컨르롤 한다는 뜻
@EntityRepository(Board)
export class BoardRepository extends Repository<Board> {}
