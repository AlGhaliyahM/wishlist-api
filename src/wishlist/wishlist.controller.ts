import { Controller, Post, Get, Body, HttpStatus } from '@nestjs/common';
import { WishlistService } from './wishlist.service';

@Controller('api/v1/wishlist')
export class WishlistController {
  constructor(private wishlistService: WishlistService) {}

  @Post()
  async wishlistScraper(@Body() url: string) {
    return await this.wishlistService.wishlistScraper(url);
  }
}
