import { User } from 'src/auth/user.entity';
import {
  ManyToOne,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  Entity,
} from 'typeorm';
import { BoardStatus } from './board-status.enum';

@Entity()
export class Board extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: BoardStatus;

  @ManyToOne((type) => User, (User) => User.boards, { eager: false })
  user: User;
}
