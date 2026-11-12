import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { BooksModule } from './books/books.module';
import { GenresModule } from './genres/genres.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [BooksModule, GenresModule, AuthModule],
  providers: [PrismaService],
  exports: [PrismaService],
})
export class AppModule {}
