import { Controller, Get, Post, Param, Body, Put } from '@nestjs/common';
import { LibraryService } from '../services/library.service';
import { CreateLibraryDto, UpdateLibraryDto } from '../dto/library.dto';
import { ApiTags, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';

@Controller('library')
@ApiTags('Library')
export class LibraryController {
  constructor(private readonly libraryService: LibraryService) {}

  @Post()
  @ApiResponse({ status: 201, description: 'Library item created' })
  @ApiBody({ type: CreateLibraryDto })
  create(@Body() createLibraryDto: CreateLibraryDto) {
    return this.libraryService.create(createLibraryDto);
  }

  @Get()
  @ApiResponse({ status: 200, description: 'List of library items' })
  findAll() {
    return this.libraryService.findAll();
  }

  @Get(':id')
  @ApiParam({ name: 'id', description: 'Library item ID' })
  @ApiResponse({ status: 200, description: 'Library item found' })
  findOne(@Param('id') id: number) {
    return this.libraryService.findOne(id);
  }

  @Put(':id')
  @ApiParam({ name: 'id', description: 'Library item ID' })
  @ApiResponse({ status: 200, description: 'Library item updated' })
  @ApiBody({ type: UpdateLibraryDto })
  update(@Param('id') id: number, @Body() updateLibraryDto: UpdateLibraryDto) {
    return this.libraryService.update(id, updateLibraryDto);
  }
}
