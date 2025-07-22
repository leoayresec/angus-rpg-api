import { Module } from '@nestjs/common';
import { StereotypeService } from './stereotype.service';
import { StereotypeController } from './stereotype.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [StereotypeController],
  providers: [StereotypeService],
})
export class StereotypeModule {}
