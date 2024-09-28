import { Injectable, OnModuleInit } from '@nestjs/common';
import { InsertGenresService } from './book/services/initializer/genres.initializer.service';
import { InsertAuthorservice } from './book/services/initializer/author.initializet.service';

@Injectable()
export class AppInitializer implements OnModuleInit {
  constructor(
    private readonly insertGenresService: InsertGenresService,
    private readonly insertAuthorService: InsertAuthorservice,
  ) {}

  async onModuleInit() {
    await this.insertGenresService.insertDefaultGenres();
    await this.insertAuthorService.insertDefaultAuthor();
  }
}
