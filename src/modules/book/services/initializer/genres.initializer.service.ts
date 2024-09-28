import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Genres } from '../../entities/genres.schema';

@Injectable()
export class InsertGenresService {
  private readonly logger = new Logger(InsertGenresService.name);

  constructor(
    @InjectModel(Genres.name) private readonly genresModel: Model<Genres>,
  ) {}

  async insertDefaultGenres(): Promise<void> {
    const defaultGenres = [
      'Fiction',
      'Non-Fiction',
      'Mystery',
      'Science Fiction',
      'Fantasy',
    ];

    for (const genreName of defaultGenres) {
      const existingGenre = await this.genresModel
        .findOne({ genreName })
        .exec();

      if (existingGenre) {
        this.logger.log(
          `Genre "${genreName}" already exists, skipping insertion.`,
        );
      } else {
        const newGenre = new this.genresModel({ genreName });
        await newGenre.save();
        this.logger.log(`Inserted genre: "${genreName}"`);
      }
    }
  }
}
