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
