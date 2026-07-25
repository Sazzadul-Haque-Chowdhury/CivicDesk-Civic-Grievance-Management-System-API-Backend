import { Module } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { MessagesController } from './messages.controller';
import { Message } from './entities/message.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GrievancesModule } from 'src/grievances/grievances.module';
import { NotificationsModule } from 'src/notifications/notifications.module';
import { UsersModule } from 'src/users/users.module';

@Module({
<<<<<<< HEAD
  imports: [
    TypeOrmModule.forFeature([Message]),
    GrievancesModule,
    NotificationsModule,
  ],
=======
  imports: [TypeOrmModule.forFeature([Message]), GrievancesModule, NotificationsModule, UsersModule],
>>>>>>> sazzad-feature
  controllers: [MessagesController],
  providers: [MessagesService],
})
export class MessagesModule {}
