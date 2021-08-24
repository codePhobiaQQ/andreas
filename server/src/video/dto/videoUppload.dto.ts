export class VideoUpploadDto {
  readonly Title: string;
  readonly Description: string;
  readonly Level: string;
  readonly Price: number;
  readonly Duration: string;
}

export class GetOneVideoDto {
  readonly id: number;
}

export class GetAmountVideoDto {
  readonly count: number;
  readonly page: number;
}
