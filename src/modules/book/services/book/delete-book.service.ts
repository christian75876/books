import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Book } from '../../entities';
import { Model } from 'mongoose';

@Injectable()
export class DeleteBookByIdService {
  constructor(
    @InjectModel(Book.name) private readonly modelBook: Model<Book>,
  ) {}

  async deleteBookById(id: string): Promise<string> {
    const book = this.modelBook.findByIdAndUpdate(
      id,
      { isDeleted: true },
      { new: true },
    );
    if (!book) throw new NotFoundException(`Book with Id: ${id} not found`);

    return `Book with Id: ${id} has been deleted`;
  }
}
