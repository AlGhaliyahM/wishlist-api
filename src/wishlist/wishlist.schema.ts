import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Date, HydratedDocument } from 'mongoose';
import { WishlistData } from 'src/wishlist/wishlistData.interface';

export type WishlistDocument = HydratedDocument<Wishlist>;

@Schema({ timestamps: true })
export class Wishlist {
  @Prop()
  Url: string;

  @Prop([])
  items: WishlistData[];

  @Prop({ type: Date, default: Date.now })
  createdAt: Date;

  @Prop({ type: Date })
  updated_at: Date;
}

export const WishlistSchema = SchemaFactory.createForClass(Wishlist);
