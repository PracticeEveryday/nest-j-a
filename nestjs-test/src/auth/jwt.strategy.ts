import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';

// Injectable을 사용하는 이유는 다른 곳에서도 주입을 해서 사용을 할 수 있게 하기 위해 Injectable 데코레이터 사용
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    // userRepository 주입 시켜준 이유는 토큰이 유효한지 확인한 다음 payload로 유저객체를 가져오기 위해 주입함.
    @InjectRepository(UserRepository) private userRepository: UserRepository,
  ) {
    super({
      secretOrKey: 'Secret1234',
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
  }

  // 인증되면 payload가 전달 됨!
  // 모든 유효한 요청에는 유저 정보가 들어있기를 원한다!
  async validate(payload) {
    const { username } = payload;
    const user: User = await this.userRepository.findOne({
      where: { username: username },
    });

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
