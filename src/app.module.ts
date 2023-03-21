import { Module } from '@nestjs/common';
import { WishlistModule } from './wishlist/wishlist.module';
import { NestCrawlerModule } from 'nest-crawler';
@Module({
  imports: [WishlistModule, NestCrawlerModule],
})
export class AppModule {}
