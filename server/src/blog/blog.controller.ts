import { Controller, Post, UseInterceptors } from '@nestjs/common';
import { BlogService } from './blog.service';
import { CreateBlogDto } from './dto/createBlog.dto';
import { FileFieldsInterceptor } from '@nestjs/platform-express/multer';

@Controller('blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}
  @Post('create')
  @UseInterceptors(FileFieldsInterceptor([{ name: 'img', maxCount: 1 }]))
  async create(blogData: CreateBlogDto) {
    return this.blogService.create(blogData);
  }
}
