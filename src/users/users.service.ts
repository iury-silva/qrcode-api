import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
// import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
  async create(createUserDto: CreateUserDto) {
    const user = await this.prisma.user.create({ data: createUserDto });

    if (user) {
      return user;
    } else {
      return { error: 'Error creating user' };
    }
  }

  async findAll() {
    try {
      const findUsers = await this.prisma.user.findMany();
      if (findUsers) {
        return findUsers;
      } else {
        return { error: 'Error finding users' };
      }
    } catch (error) {
      return error;
    }
  }

  findOne(id: string) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }

  remove(id: string) {
    return this.prisma.user.delete({ where: { id } });
  }
}
