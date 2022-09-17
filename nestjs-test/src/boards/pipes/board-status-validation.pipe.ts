import { BoardStatus } from './../board.model';
import {
  ArgumentMetadata,
  BadRequestException,
  PipeTransform,
} from '@nestjs/common';

// 상태를 PUBLIC과 PRIVATE만 올수 있게 이외의 값이 오면 에러 처리하겠습니다.
export class BoardStatusValidationPipe implements PipeTransform {
  // 클래스 외부에서 접근 할 수 있지만 변경은 할 수 없음 readonly
  readonly StatusOptions = [BoardStatus.PRIVATE, BoardStatus.PUBLIC];

  transform(value: any, metadata: ArgumentMetadata) {
    // 어떠한 문자열도 대문자로 만들어준다!
    value = value.toUpperCase();

    if (!this.isStatusValid(value)) {
      // 잘 못된 request 형식임
      throw new BadRequestException(`${value} isn't in the status options`);
    }

    return value;
  }

  private isStatusValid(status: any) {
    // 이 둘안에 들어있는지 아닌 지 value가 없으면 -1을 뱉어냄
    const index = this.StatusOptions.indexOf(status);

    // -1이 아니면 true, -1이면 false
    return index !== -1;
  }
}
