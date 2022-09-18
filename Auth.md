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
