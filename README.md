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

#### Provider 란?

- 프로바이더는 Nest의 기본 개념으로 대부분의 기본 Nest 클래스는 서비스, 레포지토리, 팩토리, 헬퍼 등 프로바이더로 취급될 수 있습니다.
- 프로바이더의 주요 아이디어는 종속성으로 주입할 수 있다는 것입니다.
- 즉, 객체는 서로 다양한 관계를 만들 수 있으며 객체의 인스턴스를 연결하는 기능은 대부분 Nest 런타임 시스템에 위임 될 수 있습니다.

#### Service 란?

- 서비스는 소프트웨어 개발 내의 공통 개념이며, Nest, Js에서만 쓰이지 않습니다.
- @Injectable// 주입 가능한 // 데코레이터로 감싸져 모듈에 제공되며, 이 서비스 인스턴스는 App 전체에서 사용될 수 있습니다.
- 서비스는 컨트롤러에서 데이터의 유효성 체크를 하거나 DB에 아이템을 생성하는 등의 작업을 하는 부분을 처리합니다.

#### Service를 Controller에 종속성 주입 하는 방법

- BoardsService를 타입으로 정의한 프로퍼티를 사용합니다.

##### Provider 등록하기

- Provider를 사용하기 위해 Nest에 등록을 해야 합니다.
- module 파일에서 등록이 가능하며 module파일 내에 Providers 항목 안에 해당 모듈에서 사용하고자 하는 Provider( 서비스 )를 넣어주면 됩니다.
