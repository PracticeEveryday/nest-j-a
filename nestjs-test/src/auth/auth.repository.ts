import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import { CustomRepository } from 'src/db/typeorm-ex.decorator';
import { Repository } from 'typeorm';
import { AuthCredentialsDto } from './dto/auth-credential.dto';
import { User } from './user.entity';

@CustomRepository(User)
export class UserRepository extends Repository<User> {
  async createUser(authCredentialsDto: AuthCredentialsDto): Promise<User> {
    try {
      const { username, password } = authCredentialsDto;
      const user = this.create({ username, password });

      await this.save(user);
      return user;
    } catch (error) {
      if (error.code === '23505') {
        throw new ConflictException(`Existing username`);
      } else {
        throw new InternalServerErrorException();
      }
    }
  }
}
