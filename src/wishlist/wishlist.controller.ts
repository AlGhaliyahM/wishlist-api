import { Controller, Post, Body } from '@nestjs/common';
import { Wishlist } from './wishlist.interface';
import { WishlistService } from './wishlist.service';

@Controller('api/v1/wishlist')
export class WishlistController {
  constructor(private wishlistService: WishlistService) {}

  @Post()
  async wishlistScraper(@Body() url: Wishlist) {
    return await this.wishlistService.wishlistScraper(url);
  }
}
