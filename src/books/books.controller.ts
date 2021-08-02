import {
	Body,
	Controller,
	Get,
	ParseIntPipe,
	Post,
	Query,
} from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';

@Controller('books')
@ApiTags('books')
export class BooksController {
	constructor(private readonly booksSerivce: BooksService) {}

	@Post()
	@ApiOperation({ description: 'Creates a new book' })
	async create(@Body() createBookDto: CreateBookDto) {
		return this.booksSerivce.create(createBookDto);
	}

	@Get()
	@ApiOperation({ description: 'Get all books' })
	@ApiQuery({ name: 'start', description: 'pagination start index' })
	@ApiQuery({ name: 'limit', description: 'pagination page limit' })
	async getAll(
		@Query('start', ParseIntPipe) start: number,
		@Query('limit', ParseIntPipe) limit: number,
	) {
		return this.booksSerivce.getAll(start, limit);
	}
}
