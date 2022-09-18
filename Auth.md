#### Auth API

- nest g module auth
  - auth 모듈 생성
- nest g controller auth --no-spec
  - auth 컨트롤러 생성
- nest g service auth --no-spec
  - auth 서비스 생성

#### 유저 이름에 유니크한 값 주기

1. repository에서 findOne 메소드를 이용해 이미 같은 유저 이름을 가진 아이디가 있는지 확인하고 없으면 저장하는 방법
   => 하지만 이 방법은 DB 처리를 두 번 해야 합니다.

2. DB 레벨에서 같은 이름을 가진 유저가 있다면 에러를 던져주는 방법

#### 비밀번호 암호화하기

- npm install bcryptjs --save

#### JWT

- JWT란 JSON web Token이란 당사자간에 정보를 JSON 객체로 안전하게 전송하기 위한 컴팩트하고 독립적인 방식을 정의하는 개방형 표준입니다.
- 이 정보는 디지털 서명되며 신뢰할 수 있습니다.
- 정보를 안전하게 전할 때 유저의 권한 같은 것을 체크 하기 위해 사용하는 유용한 모듈입니다.

- @nestjs/jwt
  - nestjs에서 jwt를 사용하기 위해 필요한 모듈
- @nestjs/passport
  - nestjs에서 passport를 사용하기 위해 필요한 모듈
- passport
  - passport 모듈
- passport-jwt

  - jwt 모듈

- npm install @nestjs/jwt @nestjs/passport passport passport-jwt --save
