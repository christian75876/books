import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ collection: 'authors' })
export class Author {
  @Prop({ required: true, alias: 'author_name' })
  authorName: string;
}

export const AuthorSchema = SchemaFactory.createForClass(Author);
