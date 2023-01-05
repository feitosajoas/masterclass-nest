import { Controller, Get } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';

@Controller()
export class AppController {
  constructor(private prisma: PrismaService) {}

  @Get('hello')
  async getHello() {
    const member = await this.prisma.rocketTeamMember.create({
      data: {
        id: 'capitao',
        name: 'Jhoe Capitão',
        function: 'Alcançar coisas no alto',
      },
    });

    return {
      member,
    };
  }
}
