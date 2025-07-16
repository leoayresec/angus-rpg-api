import { Module } from '@nestjs/common';

import { CharacterModule } from './character/character.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [CharacterModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
