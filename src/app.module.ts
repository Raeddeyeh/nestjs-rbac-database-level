import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { UsersModule } from './users/users.module';
import { JwtStrategy } from './common/strategy/jwt.strategy';
import { JwtGuard } from './common/guards/jwt.guard';
@Module({
  imports: [BooksModule, UsersModule],
  controllers: [AppController],
  providers: [AppService , JwtStrategy  , JwtGuard],
})
export class AppModule {}
