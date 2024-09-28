import { Injectable } from '@nestjs/common';
import { CreateBookService } from './services/book/create-book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { Book } from './entities/book.schema';


@Injectable()
export class BookService {
  constructor(
    private readonly createBookService: CreateBookService
  ) { }

  async createBook(createBookDto: CreateBookDto): Promise<Book>{
    return this.createBookService.create(createBookDto);
  }
}
