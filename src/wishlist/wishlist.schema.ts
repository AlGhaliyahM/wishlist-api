import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { WishlistData } from 'src/wishlist/wishlistData.interface';

export type WishlistDocument = HydratedDocument<Wishlist>;

@Schema()
export class Wishlist {
  @Prop()
  items: WishlistData[];
  @Prop()
  created_at: Date;
  @Prop()
  updated_at: Date;
}

export const WishlistSchema = SchemaFactory.createForClass(Wishlist);
