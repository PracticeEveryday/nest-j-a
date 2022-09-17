# nest-j-a

```
npm i -g @nestjs/cli
nest new nestjs-test ( 프로젝트 이름 )
```

#### 모듈 생성하기

- nest g module boards
- nest: 네스트 cli 사용 using nestcli
- g: 생성하다. generate
- module: 모듈을 생성 schematic that i want to create
- boards: 생성하는 모듈의 이름 name of the schematic

#### 컨트롤러 생성하기

- 컨트롤러는 들어오는 요청을 처리하고 클라이언트에 등답을 반환하는 역할을 함.
- Client => http request => Controller ( 알 맞은 컨트롤러로 감 )

- nest g controller boards --no-spec
- nest: 네스트 cli 사용 using nestcli
- g: 생성하다. generate
- controller: controller shematic
- boards: name of the schematic
- --no-spec: 테스트를 위한 소스 코드 생성 x

##### CLI로 명령어 입력 시 Controller 만드는 순서

1. cli는 먼저 boards 폴더를 찾음
2. boards 폴더 안에 Controller 파일 생성
3. boards 폴더 안에 module 파일 찾기
4. module 파일 안에 Controller 넣어주기

#### 서비스 만들기

- Service 안에서는 데이터 베이스 관련된 로직을 처리합니다. 데이터베이스에서 데이터를 가져오거나 데이터 베이스 안에 게시판을 생성할 때 생성한 게시판의 정보를 넣어주는 등의 로직을 처리합니다.

- nest g service boards --no-spec
- nest: 네스트 cli 사용 using nestcli
- g: 생성하다. generate
- service: service shematic
- boards: name of the schematic
- --no-spec: 테스트를 위한 소스 코드 생성 x

- 생성된 서비스 파일 내에 Injectable 데코레이터가 있으며 NestJS는 이를 이용해 다른 컴포넌트에서 이 서비스를 사용할 수 있게 만들어 줍니다.

###### Board Service를 Board Controller에서 이용할 수 있게 해주기 ( Dependency Injection )

- Nest JS에서 Dependency Injection은 클래스의 Constructor 안에서 이루어 짐.
