#### TypeORM ( Object Relational Mapping )

- TypeORM이란 Node.js에서 실행되고 TypeScript로 작성된 객체 관계형 매퍼 라이브러리입니다.
- TypeORM은 MySQL, PostgreSQL, MariaDB, SQLite, MS SQL Server, Oracle, SAP Hana 및 WebSQL과 같은 여러 데이터베이스를 지원합니다.

#### ORM

- 객체와 관계형 데이터베이스의 데이터를 자동으로 변형 및 연결하는 작업입니다.
- ORM을 이용한 개발은 객체와 데이터베이스의 변형에 유연하게 사용할 수 있습니다.

Object 객체 <----- 매핑 ------> 관계형 DB
객체 지향 프로그래밍은 클래스 사용 // 관계형 데이터 베이스는 테이블 사용
=> 객체 모델과 관계형 모델 간 불일치 존재
=> 이 두가지를 매핑 시켜주는 것이 ORM!!

##### TypeORM vs Pure JavaScript

```
const boards = Board.find({title: 'Hello', status: 'PUBLIC'})

db.query("SELECT * FROM boards WHERE title = "Hello" AND status = "PUBLIC", (err, result) => {
  if (err) {
    throw new Error('Error')
  }
  boards = result.rows
})
```

##### TypeORM 특징과 이점

- 모델을 기반으로 데이터베이스 테이블 체계를 자동으로 생성합니다.
- 데이터베이스에서 개체를 쉽게 삽입, 업데이트 및 삭제를 할 수 있습니다.
- 테이블 간의 매핑 ( 일대일, 일대 다 및 다 대다 )을 만듭니다.
- 간단한 CLI 명령을 제공합니다.

- TypeORM은 간단한 코딩으로 ORM 프레임 워크를 사용하기 쉽습니다.
- TypeORM은 다른 모듈과 쉽게 통합됩니다.

#### TypeORM을 사용하기

```
@nestjs/typeorm
- NestJS에서 TypeORM을 사용하기 위해 연동시켜주는 모듈

typeorm
- typeorm 모듈

pg
- Postgres 모듈

npm install pg typeorm @nestjs/typeorm --save

```

#### TypeORM 애플리케이션에 연결하기

- typeORM 설정 파일 생성
