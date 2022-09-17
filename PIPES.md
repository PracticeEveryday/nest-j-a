#### Pipe

- 파이프는 @Injectable() 데코리어트로 주석이 달린 클래스입니다.
- 파이프는 Data Transformation과 Data Validation을 위해 사용합니다.
- 파이프는 컨트롤러 경로 처리기에 의해 처리되는 인수에 대해 작동합니다.
- Nest는 메소드가 호출되기 직전에 파이프에 삽입하고 파이프는 메소드로 향하는 인수를 수신하고 이에 대해 작동합니다.

##### Data Transformation?

- 입력 데이터를 원하는 형식으로 변환 ( 문자열 => 정수 )
- 만약 숫자를 받길 위하는 데 문자열 형식으로 온다면 파이프에서 자동으로 숫자로 바꿔줍니다.
- String To Integer Ex) String '7' => Integer 7

##### Data Validation?

- 입력 데이터를 평가하고 유효한 경우 변경되지 않은 상태로 전달하면 됩니다.
- 그렇지 않다면 데이터가 올바르지 않을 때 예외를 발생시킵니다.

- 만약 길이가 10자 이하여야 하는데 10자 이상이면 에러를 발생시킵니다

##### 파이프 사용하는 법 ( Binding Pipes )

- 파이프르 사용하는 방법은 세가지로 나눠질 수 있습니다.
- Handler-Level Pipes, Parameter-Level Pipes, Global-Level Pipes 입니다.
- 이름에서 말하는 것 그대로 핸들러 레벨, 파라미터 레벨, 글로벌 레벨로 파이프를 사용 가능합니다.

##### Handler-Level Pipes

- 핸들러 레벨에서 @UsePipes() 데코레이터를 이용해서 사용합니다.
- 이 파이프는 모든 파라미터에 적용 됩니다. ( title, description )

```
@Post()
@UsePipes(pipe)
createBoard(
  @Body('title') title,
  @Body('description') description{

  }
)
```

##### Parameter-Level Pipes

- 파라미터 레벨의 파이프이기에 특정한 파라미터에 대해서만 작동합니다.
- 아래와 같은 경우 title에만 파라미터 파이프가 적용됩니다.

```
@Post()
createBoard(
  @Body('title', ParameterPipe) title,
  @Body('description') description{

  }
)
```

##### Global Pipes

- 글로벌 파이프로서 애플리케이션 레벨의 파이프입니다.
- 클라이언트에서 들어오는 모든 요청에 적용됩니다.
- 가장 상단 영역인 main.ts에 넣어주시면 됩니다.

```
async function bootstrap() {
  cosnt app = await NestFactory.create(AppModeule);
  app.useGlobalPipes(GlobalPipes);
  await app.listen(3000);
}
bootstrap()
```

##### Built-in Pipes

- Nest JS에서 기본적으로 사용할 수 있게 만든 6가지 파이프입니다.

1. ValidationPipe
2. ParseintPipe
3. ParseBoolPipe
4. ParseArrayPipe
5. ParseUUIDPipe
6. DefaultValuePipe

#### Pipe 모듈 적용

```
필요한 모듈
class-validator, class-transformer => pipe 역할이 이 두개임!!
npm install class-validator class-transformer --save
```

#### 특정 게시물을 찾을 때 없는 경우 결과값 처리

- 현재 특정 게시물을 ID로 가져올 때 없는 경우는 에러를 처리해 주지 않고 있습니다.
- 이 케이스에 대해 없으면 없다고 내용을 넣어 클라이언트에 보내주겠습니다.

- 에러를 표출해주기 위해선 NotFountException()이라는 예외 인스턴스를 사용해 주면 됩니다.
