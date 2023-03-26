import { Module } from '@nestjs/common';
import { WishlistModule } from './wishlist/wishlist.module';
import { NestCrawlerModule } from 'nest-crawler';
import { MongooseModule } from '@nestjs/mongoose';
import axios from 'axios';

@Module({
  imports: [WishlistModule, NestCrawlerModule, MongooseModule],
})
export class AppModule {}
