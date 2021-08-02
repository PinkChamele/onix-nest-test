import { bookStub } from '../test/stubs/book.stub';

export const BooksService = jest.fn().mockReturnValue({
	create: jest.fn().mockResolvedValue(bookStub()),
	getAll: jest.fn().mockResolvedValue([bookStub()]),
});
