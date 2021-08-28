import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import { CreateRoleDto } from '../role/dto/create-role.dto';
import { Role } from '../role/role.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoryVideoEntity } from './category-video.entity';

@Injectable()
export class CategoryVideoService {
  constructor(
    @InjectRepository(CategoryVideoEntity)
    private readonly categoryRepository: Repository<CategoryVideoEntity>,
  ) {}

  async create(data: { name: string }): Promise<CategoryVideoEntity> {
    const category = await this.categoryRepository.create(data);
    await this.categoryRepository.save(category);
    return category;
  }

  async getAll(): Promise<CategoryVideoEntity[]> {
    try {
      const category = await this.categoryRepository.find();
      return category;
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
