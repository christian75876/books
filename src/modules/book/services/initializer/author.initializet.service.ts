import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Author } from '../../entities/author.schema';
import { Model } from 'mongoose';
import { Genres } from '../../entities/genres.schema';

@Injectable()
export class InsertAuthorservice {
  private readonly logger = new Logger(InsertAuthorservice.name);

  constructor(
    @InjectModel(Author.name) private readonly authorModel: Model<Genres>,
  ) {}

  async insertDefaultAuthor(): Promise<void> {
    const defaultAuthor = ['Author one', 'Author two', 'Author three'];

    for (const authorName of defaultAuthor) {
      const existingAuthor = await this.authorModel
        .findOne({ authorName })
        .exec();

      if (existingAuthor) {
        this.logger.log(
          `Author "${authorName}" already exists, skipping insertion.`,
        );
      } else {
        const newAuthor = new this.authorModel({ authorName });
        await newAuthor.save();
        this.logger.log(`Inserted author "${authorName}".`);
      }
    }
  }
}
