import { IsArray, IsNotEmpty, IsString } from 'class-validator';

export class CreateBookDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsString()
  author: string;

  @IsArray()
  genres: string[];

  @IsNotEmpty()
  @IsString()
  publicationDate: string;
}
