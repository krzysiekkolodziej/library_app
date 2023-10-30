import { Module } from '@nestjs/common';
import { LibraryModule } from './modules/library.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Library } from './entities/library.entity';

@Module({
  imports: [
    LibraryModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'db',
      port: 5432,
      username: 'root',
      password: 'root',
      database: 'test_db',
      entities: [Library],
      synchronize: true,
      autoLoadEntities: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
