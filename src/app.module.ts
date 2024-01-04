import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { EventsModule } from './events/events.module';
import { GuestModule } from './guest/guest.module';

@Module({
  imports: [UsersModule, EventsModule, GuestModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
