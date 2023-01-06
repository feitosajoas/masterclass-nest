import { IsNotEmpty, Length } from 'class-validator';

export class CreateTeamMember {
  @IsNotEmpty()
  @Length(3, 100)
  name: string;

  @IsNotEmpty({
    message: 'Member function should not be empty',
  })
  function: string;
}
