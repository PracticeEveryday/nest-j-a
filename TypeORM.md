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

#### Entity를 생성해야 하는 이유

- ORM없이 데이터베이스 테이블을 생성하는 케이스

```
CREATE TABLE board {
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description VARCHAR(255) NOT NULL,
}
```

- 이런 식으로 테이블을 생성합니다.
- 하지만 TypeORM은 DB Table로 변환되는 Class이기 때문에 위처럼 하지 않고 클래스를 생성한 후 그 안의 칼럼들을 정의해주시면 됩니다.

- @Entity()

  - Entity() 데코레이터 클래스는 Board 클래스가 엔티티임을 나타냅니다.
  - CREATE TABLE board 부분입니다.

- @PrimaryGeneratedColumn()

  - PrimryGeneratedColumn() 데코레이터는 id열이 Board 엔터티의 기본키 필드임을 나타내는데 사용됩니다.

- @Column()
  - Column() 데코레이터 클래스는 Board 엔터티의 title 및 description과 같은 다른 열을 나타내는 데 사용됩니다.

#### Repository 생성하기

- Repository란 엔티티 개체와 함께 작동하며 엔티티 찾기, 삽입, 업데이트, 삭제 등을 처리합니다.
- DB에 관련된 일은 서비스에서 하는 게 아닌 Repository에서 해주시면 됩니다.
- 이것을 Repository Pattern 이라고도 부릅니다.
- DB에 관련된 일 ( INSERT FIND DELETE 등등 )
