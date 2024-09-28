import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Book } from '../../entities/book.schema';
import { Model } from 'mongoose';
import { PaginationDto } from '../../dto/pagination.dto';

@Injectable()
export class FindAllBooksService {
  constructor(
    @InjectModel(Book.name) private readonly bookModel: Model<Book>,
  ) {}
  async findAllBooks(paginationDto: PaginationDto): Promise<Book[]> {
    try {
      const { limit = 10, offset = 0 } = paginationDto;
      const books = await this.bookModel
        .find()
        .skip(offset)
        .limit(limit)
        .sort({ title: 1 });
      if (!books) {
        throw new NotFoundException('Book not found');
      }
      return books;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error('Failed to find all books' + error.message);
      }
    }
  }
}
