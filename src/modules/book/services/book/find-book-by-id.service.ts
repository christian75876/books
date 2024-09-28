import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Book } from '../../entities';
import { Model } from 'mongoose';

@Injectable()
export class FindBookByIdService {
  constructor(
    @InjectModel(Book.name) private readonly modelBook: Model<Book>,
  ) {}

  async findById(id: string): Promise<Book> {
    const book = this.modelBook.findById(id).exec();
    if (!book) throw new NotFoundException('Book not found');
    return book;
  }
}
