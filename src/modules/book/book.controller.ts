import {
  Controller,
  Post,
  Body,
  Get,
  Query,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto, PaginationDto, UpdateBookDto } from './dto';

@Controller('books')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Post()
  create(@Body() createBookDto: CreateBookDto) {
    return this.bookService.createBook(createBookDto);
  }

  @Get()
  findAll(@Query() paginationDto: PaginationDto) {
    return this.bookService.findAlBooks(paginationDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBook: UpdateBookDto) {
    return this.bookService.updateBook(id, updateBook);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bookService.findBookById(id);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.bookService.deleteBookById(id);
  }
}
