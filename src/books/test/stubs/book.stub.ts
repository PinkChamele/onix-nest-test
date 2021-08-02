import { Book } from 'src/books/schemas/book.schema';

export const bookStub = (): Book => {
	return {
		name: 'TestName',
		price: 123,
	};
};
