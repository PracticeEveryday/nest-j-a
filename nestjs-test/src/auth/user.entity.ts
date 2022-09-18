import { Board } from 'src/boards/board.entity';
import {
  OneToMany,
  BaseEntity,
  Column,
  PrimaryGeneratedColumn,
  Entity,
} from 'typeorm';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @OneToMany((type) => Board, (board) => board.user, { eager: true })
  boards: Board[];
}
