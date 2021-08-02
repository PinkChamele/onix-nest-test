import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';

const url = process.env.MONGODB_URI || 'localhost';

@Module({
	imports: [
		BooksModule,
		MongooseModule.forRoot(url, { useNewUrlParser: true }),
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
