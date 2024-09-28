import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type BooksDocument = Book & Document;

@Schema({ collection: 'books' })
export class Book {
  @Prop({ required: true })
  title: string;

  @Prop({
    type: Types.ObjectId,
    required: true,
    ref: 'Author',
    alias: 'author_id',
  })
  author: Types.ObjectId;

  @Prop({ alias: 'publication_date' })
  publicationDate: string;

  @Prop({ type: [Types.ObjectId], ref: 'Genres' })
  genres: Types.ObjectId[];

  @Prop({ default: false })
  isDeleted: boolean;
}

export const BookSchema = SchemaFactory.createForClass(Book);
