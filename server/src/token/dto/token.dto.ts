export class TokenDto {
  userId: number;
  refreshToken: string;

  constructor(userId: number, refreshToken: string) {
    this.userId = userId;
    this.refreshToken = refreshToken;
  }
}
