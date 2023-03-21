import { Module } from '@nestjs/common';
import { WishlistController } from './wishlist.controller';
import { WishlistService } from './wishlist.service';
import { NestCrawlerModule } from 'nest-crawler';
@Module({
  imports: [NestCrawlerModule],
  controllers: [WishlistController],
  providers: [WishlistService],
})
export class WishlistModule {}
