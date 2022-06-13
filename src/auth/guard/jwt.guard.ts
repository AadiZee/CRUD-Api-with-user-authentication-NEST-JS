import { AuthGuard } from '@nestjs/passport';

export class JwtGurad extends AuthGuard('jwt') {
  constructor() {
    super();
  }
}
