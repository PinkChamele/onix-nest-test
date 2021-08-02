import { ApiProperty } from '@nestjs/swagger';

export class CreateBookDto {
	@ApiProperty()
	readonly name: string;

	@ApiProperty()
	readonly price: number;
}
