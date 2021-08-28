import { Body, Controller, Get, Post } from '@nestjs/common';
import { CategoryVideoService } from './category-video.service';
import { CategoryVideoEntity } from './category-video.entity';

@Controller('category-video')
export class CategoryVideoController {
  constructor(private readonly categoryVideoService: CategoryVideoService) {}
  @Post('create')
  async create(@Body() data: { name: string }): Promise<CategoryVideoEntity> {
    const category = await this.categoryVideoService.create({
      name: data.name,
    });
    return category;
  }

  @Get('get-all')
  async getAll(): Promise<CategoryVideoEntity[]> {
    const category = await this.categoryVideoService.getAll();
    return category;
  }
}
