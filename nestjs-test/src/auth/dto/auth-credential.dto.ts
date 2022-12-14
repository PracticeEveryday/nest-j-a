import { IsString, Matches, MaxLength, MinLength } from 'class-validator';

export class AuthCredentialsDto {
  @IsString()
  @MinLength(1)
  @MaxLength(20)
  username: string;

  @IsString()
  @MinLength(1)
  @MaxLength(20)
  // 영어랑 숫자만 가능한 유효성 체크
  @Matches(/^[a-zA-Z0-9]*$/, { message: `비밀번호는 영어, 숫자만 가능` })
  password: string;
}
