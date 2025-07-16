import { Module } from '@nestjs/common';

import { CharacterModule } from './character/character.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [CharacterModule, UserModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
