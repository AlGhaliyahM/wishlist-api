import { Module } from '@nestjs/common';
import { WishlistController } from './wishlist.controller';
import { WishlistService } from './wishlist.service';
import { NestCrawlerModule } from 'nest-crawler';
import { WishlistSchema, Wishlist } from './wishlist.schema';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [
    NestCrawlerModule,
    MongooseModule.forFeature([
      { name: Wishlist.name, schema: WishlistSchema },
    ]),
  ],
  controllers: [WishlistController],
  providers: [WishlistService],
})
export class WishlistModule {}
