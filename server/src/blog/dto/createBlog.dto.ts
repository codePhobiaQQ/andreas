import { IsNotEmpty } from 'class-validator';

export class CreateBlogDto {
  @IsNotEmpty()
  readonly id: number;

  @IsNotEmpty()
  readonly image: string;

  @IsNotEmpty()
  readonly title: string;

  @IsNotEmpty()
  readonly text: string;
}
