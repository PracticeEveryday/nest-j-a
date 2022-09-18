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

#### passport

- @types/passport-jwt
  - passport-jwt 모듈을 위한 타입 정의 모듈

##### 요청 안에 유저 정보( 유저 객체 )가 들어가게 하는 방법

- validate 메소드에서 return 값을 user 객체로 주었습니다.
- 하지만 user 객체가 들어있지 않았습니다

- UseGuards
- UseGuards안에 @nestjs/passport에서 가져온 AuthGuard()를 이용하면 요청 안에 유저 정보를 넣어줄 수 있습니다.

##### NestJS에서의 Middleware

- NestJS에서는 여러가지의 미들웨어가 있습니다.
- Pipes, Filters, Guards, Interceptors 등 미들 웨어로 취급되는 것이 있는데 각각 다른 목적을 가지며 사용되고 있습니다.

Pipes: 유효성 검사 및 페이로드 변환을 위해 만들어 짐. 데이터를 예상한대로 직렬화합니다.

Filters: 필터는 오류 처리 미들 웨어입니다. 특정 오류 처리기를 사용할 경로와 각 경로 주변의 복잡성을 관리하는 방법을 알 수 있습니다.

Guards: 인증 미들웨어입니다. 지정된 경로로 통과할 수 있는 사람과 허용되지 않는 사람을 서버에 알려줍니다.

Interceptors: 인터셉터는 응답 매핑 및 캐시 관리와 함께 요청 로깅과 같은 전후 미들웨어입니다. 각 요청 전후에 이를 실행하는 기능은 매우 강력하고 유용합니다.

##### 각각의 미들웨어가 불러지는 순서

middleware -> guard -> interceptor ( before ) -> pipe -> controller -> service -> controller -> interceptor ( after ) -> filter ( if applicable ) -> client

#### 커스텀 데코레이터 만들기

#### 인증된 유저만 게시물 보고 쓸 수 있게 하기

- 인증에 관한 모듈을 board 모듈에서 쓸 수 있어야 되기에 board module에서 인증 모듈을 import 해야 함. ( 이렇게 되면 AuthModule에서 export하는 어떠한 것이든 board Moduel에서 사용 가능하게 됩니다. )

#### 유저와 게시물의 관계 형성 해주기

- 게시물을 생성 할 때도 어떤 유저가 생성해줬는지 정보를 같이 넣어주어야 합니다.
- 유저와 게시물 관계 부분을 처리해 주겠습니다.

##### 유저와 게시물 데이터의 관계 형성

1. 관계를 형성하기 위해 엔티티에 서로 간의 필드를 넣어주어야 합니다.
   User -> 게시물 1, 게시물 2, 게시물 3
   OneToMany Relationship ManyToOne Relationship

##### 파라미터

Type: 보드의 타입을 정의
보드에서 유저를 접근하기 위해서는 board.user! 명시
eager: true => 유저 정보 가져올 때 보드를 가져 온다.
eager: flase => 보드 정보 가져올 때 유저 안 가져 온다.
