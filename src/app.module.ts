import { Module } from '@nestjs/common';

import { CharacterModule } from './character/character.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './database/database.module';
import { StereotypeModule } from './stereotype/stereotype.module';
import { SkillModule } from './skill/skill.module';

@Module({
  imports: [CharacterModule, UserModule, AuthModule, DatabaseModule, StereotypeModule, SkillModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
