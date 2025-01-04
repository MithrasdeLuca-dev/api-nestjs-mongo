import { applyDecorators } from '@nestjs/common';
import { ApiHeader } from '@nestjs/swagger';

export function ApiHeadersSwagger() {
  return applyDecorators(
    ApiHeader({ name: 'authorization', description: 'Bearer Token usado para autenticação' }),
  );
}