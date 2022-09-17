#### CRUD

- 클라이언트에서 요청을 보내면 먼저 컨트롤러에서 알맞은 요청 경로에 라우팅을 하여 해당 핸들러로 가게 됩니다.
- 그 후 요청을 처리해주기 위해 서비스로 들어가며 그 요청에 맞는 로직을 서비스에서 처리해 준 뒤 컨트롤러에 리턴값을 보내줍니다.
- 마지막으로 컨트롤러에서 결과값을 리턴해주게 됩니다.

Controller <=> handle the request <= service

#### Board Model 정의하기

- 게시물에 필요한 데이터가 어떤 것이 필요한지 저으이해주기 위해 게시물의 모델을 만들어주자!
- 예를 들어 게시물 데이터에는 ID가 필요하고 이름 설명 등이 필요하다.
- board.model.ts

##### 모델을 정의

- 모델을 정의하기 위해선 Class 또는 Interface를 이용하면 됩니다.
- interface => 변수의 타입만을 체크합니다.
- classes => 변수의 타입도 체크하고 인스턴스 또한 생성 가능합니다.

##### Type을 정의해 주면 좋은 이유

- 타입을 정의해주는 것은 선택 사항이지만 타입을 정의해줌으로써 타입과 다른 코드를 사용할 시 에러가 발생하게 됩니다.
- 또한 코드를 읽는 입장에서 더 코드를 쉽게 이해하며 읽을 수 있습니다.

#### C Create

- 게시물에 관한 로직을 처리하는 곳은 Service 입니다.
- Service에서 로직을 처리한 후 Controller에 서비스를 불러오겠습니다.
- Service => Controllser

##### 게시물 ID는 어떻게 처리하나요

- ID는 모든 게시물에 유니크해야 합니다.
- 만약 DB를 사용하면 DB에서 알아서 유니크한 값을 줍니다.
- 하지만 현재 우리는 DB를 사용하지 않고 Memory에서 사용하기에 uuid 모듈을 사용하겠습니다.

- npm install add uuid --save
- import { v1 as uuid } from 'uuid'

##### Client에서 보내는 값을 어떻게 받을까요

- @Body를 통해 body 값을 가져옵니다.
- @Body()를 사용하면 모든 request에서 보내온 값을 가져올 수 있습니다.
- 하나씩 가져오려면 @Body('title') title:string, @Body('description') description:string,
