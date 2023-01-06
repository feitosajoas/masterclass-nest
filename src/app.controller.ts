import { Controller } from '@nestjs/common';
import { Body, Post } from '@nestjs/common/decorators';
import { CreateTeamMember } from './dtos/create-team-member';
import { RocketMembersRepository } from './repositories/rocket-members-repository';

@Controller()
export class AppController {
  constructor(private rocketmembersRepository: RocketMembersRepository) {}

  @Post('hello')
  async getHello(@Body() body: CreateTeamMember) {
    const { name, function: memberFunction } = body;

    await this.rocketmembersRepository.create(name, memberFunction);
  }
}
