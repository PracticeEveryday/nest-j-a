#### 설정 ( Configuration )

- 소스 코드 안에서 어떤 코드들은 개발 환경이나 운영 환경에 따라 다르게 코드를 넣어주어야 할 때가 있다.
- 남들에게 노출되지 않아야 할 코드들도 존재한다.
- 이러한 코드들을 위해 설정 파일을 따로 만들어 보관하도록 하겠습니다.

##### 설정 파일

- 설정 파일이란 runtime 도중에 바뀌는 것이 아닌 애플리케이션이 시작될 때 로드 되어 값들을 정의해 줍니다.
- 이런 설정 파일은 여러가지 파일 형식을 사용할 수 있습니다.
- Ex) XML, JSON, YAML, Environment Variables

##### Codebase VS Environment Variables( 환경 변수 )

- XML, JSON YAML 같은 경우는 Codebase이다.
- 다른 방법은 환경 변수로 설정 가능하다.
- 이 둘을 나누는 이유는 비밀 번호와 API Key 같은 남에게 노출되면 안되는 정보들은 주로 환경 변수를 이용하여 처리해 줍니다.

Codebase => 일반적으로 Port 같이 노출되도 상관없는 정보들
환경 변수 => 비밀 번호나 API Key 같은 노출되면 안되는 정보들

- npm install -g win-node-env

  - 윈도우 에서는 기본적으로 환경 변수를 지원하지 않기 때문에 글로벌로 설치합니다.

- npm install config --save
  - 윈도우 맥 모두에서는 config라는 모듈을 설치 받아야 합니다.
