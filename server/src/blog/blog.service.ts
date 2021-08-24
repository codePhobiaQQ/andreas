import { Injectable } from '@nestjs/common';
import { CreateBlogDto } from './dto/createBlog.dto';

@Injectable()
export class BlogService {
  async create(blogData: CreateBlogDto) {
    return 'ahah';
  }
}
