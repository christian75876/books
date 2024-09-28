import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';

@Schema({ collection: 'book_genres' })
export class Genres {
  @Prop({ type: String, required: true, alias: 'genre_name' })
  genreName: string;

  @Prop({ type: [Types.ObjectId], ref: 'Book' })
  books: Types.ObjectId[];
}

export const GenresSchema = SchemaFactory.createForClass(Genres);
