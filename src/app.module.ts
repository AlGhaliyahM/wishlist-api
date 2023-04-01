import { Module } from '@nestjs/common';
import { WishlistModule } from './wishlist/wishlist.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ScheduleModule } from '@nestjs/schedule';
import * as dotenv from 'dotenv';
dotenv.config();

@Module({
  imports: [
    WishlistModule,
    MongooseModule.forRoot(process.env.MONGO_URI),
    ScheduleModule.forRoot(),
  ],
})
export class AppModule {}
