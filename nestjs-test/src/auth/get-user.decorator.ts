import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { User } from './user.entity';

export const GetUser = createParamDecorator(
  (data, ctx: ExecutionContext): User => {
    // 이 안에 전체 request 모든 게 들어있음!!
    // 유저 객체가 들어있다는 것을 전제로 함!
    const req = ctx.switchToHttp().getRequest();
    return req.user;
  },
);
