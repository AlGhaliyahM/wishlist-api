import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
import { NestCrawlerService } from 'nest-crawler';
@Injectable()
export class WishlistService {
  constructor(private readonly crawler: NestCrawlerService) {}

  async wishlistScraper(url: string) {
    return url;
  }
}
