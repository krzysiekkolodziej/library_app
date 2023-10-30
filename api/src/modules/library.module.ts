// library.module.ts
import { Module } from '@nestjs/common';
import { LibraryService } from '../services/library.service';
import { LibraryController } from '../controllers/library.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Library } from '../entities/library.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Library])],
  providers: [LibraryService],
  controllers: [LibraryController],
  exports: [LibraryService],
})
export class LibraryModule {}
