import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateLibraryDto, UpdateLibraryDto } from '../dto/library.dto';
import { Library } from '../entities/library.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class LibraryService {
  constructor(
    @InjectRepository(Library)
    private libraryRepository: Repository<Library>,
  ) {}

  async create(book: CreateLibraryDto) {
    const newBook = this.libraryRepository.create(book);
    return this.libraryRepository.save(newBook);
  }

  async findAll() {
    return this.libraryRepository.find();
  }

  async findOne(id: number) {
    const book = await this.libraryRepository.findOne({ where: { id } });
    if (!book) {
      throw new NotFoundException('Book not found');
    }
    return book;
  }

  async update(id: number, updateLibraryDto: UpdateLibraryDto) {
    const book = await this.findOne(id);
    this.libraryRepository.merge(book, updateLibraryDto);
    return this.libraryRepository.save(book);
  }
}
