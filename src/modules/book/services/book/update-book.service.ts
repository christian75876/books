import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Book } from '../../entities/book.schema';
import { Model } from 'mongoose';
import { UpdateBookDto } from '../../dto/update-book.dto';

@Injectable()
export class updateBookService {
  constructor(
    @InjectModel(Book.name) private readonly bookModel: Model<Book>,
  ) {}

  async updateBook(id: string, updateBookDto: UpdateBookDto): Promise<Book> {
    const updateBook = await this.bookModel.findByIdAndUpdate(
      id,
      updateBookDto,
      {
        new: true,
      },
    );

    if (!updateBook)
      throw new NotFoundException(`Book with ID: ${id} not found`);

    return updateBook;
  }
}
