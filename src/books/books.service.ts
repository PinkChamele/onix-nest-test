import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBookDto } from './dto/create-book.dto';
import { Book, BookDocument } from './schemas/book.schema';

@Injectable()
export class BooksService {
	constructor(@InjectModel(Book.name) private bookModel: Model<BookDocument>) {}

	async create(bookDto: CreateBookDto): Promise<Book> {
		const newBook = new this.bookModel(bookDto);
		return newBook.save();
	}

	async getAll(start: number, limit: number): Promise<Book[]> {
		return this.bookModel.find().skip(start).limit(limit).lean().exec();
	}
}
