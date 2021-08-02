import { Test, TestingModule } from '@nestjs/testing';
import { BooksController } from '../books.controller';
import { BooksService } from '../books.service';
import { CreateBookDto } from '../dto/create-book.dto';
import { Book } from '../schemas/book.schema';
import { bookStub } from './stubs/book.stub';

jest.mock('../books.service');

describe('BooksController', () => {
	let booksController: BooksController;
	let booksService: BooksService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [BooksController],
			providers: [BooksService],
		}).compile();

		booksController = module.get<BooksController>(BooksController);
		booksService = module.get<BooksService>(BooksService);
		jest.clearAllMocks();
	});

	it('should be defined', () => {
		expect(booksController).toBeDefined();
	});

	describe('getAll', () => {
		describe('when getAll is called', () => {
			let books: Book[];

			beforeEach(async () => {
				books = await booksController.getAll(0, 1);
			});

			test('then it shold call booksService', () => {
				expect(booksService.getAll).toHaveBeenCalled();
			});

			test('then it should return an array of books', () => {
				expect(books).toEqual([bookStub()]);
			});
		});
	});

	describe('create', () => {
		describe('when create is called', () => {
			let book: Book;
			let createBookDto: CreateBookDto;

			beforeEach(async () => {
				createBookDto = {
					name: bookStub().name,
					price: bookStub().price,
				};
				book = await booksController.create(createBookDto);
			});

			test('then is should call booksService', () => {
				expect(booksService.create).toBeCalledWith(createBookDto);
			});

			test('then it should return created book', () => {
				expect(book).toEqual(bookStub());
			});
		});
	});
});
