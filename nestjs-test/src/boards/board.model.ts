export interface Board {
  id: string;
  title: string;
  description: string;
  status: BoardStatus;
}

export enum BoardStatus {
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE',
}

/**
 * BoardStatus란
 * 공개 게시물인지 아닌지 나누어 주는 것이다.
 * 또한 이 두 상태 이외에는 나오면 안 되기 때문에 이 두가지 상태만 나올 수 있게 하기 위해 타입스크립트 기능인 enumeration을 이용하겠습니다.
 */
