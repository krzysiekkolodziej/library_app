import { ApiProperty } from '@nestjs/swagger';

export class CreateLibraryDto {
  @ApiProperty()
  readonly title: string;

  @ApiProperty()
  readonly author: string;

  @ApiProperty()
  readonly publicationYear: number;

  @ApiProperty()
  readonly isbn: string;

  @ApiProperty()
  readonly available: boolean;
}

export class UpdateLibraryDto {
  @ApiProperty()
  readonly title?: string;

  @ApiProperty()
  readonly author?: string;

  @ApiProperty()
  readonly publicationYear?: number;

  @ApiProperty()
  readonly isbn?: string;

  @ApiProperty()
  readonly available?: boolean;
}
