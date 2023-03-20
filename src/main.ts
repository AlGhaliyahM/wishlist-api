import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import Colors = require('colors.ts');
Colors.enable();
import * as dotenv from 'dotenv';
dotenv.config();

async function bootstrap() {
  const PORT = process.env.PORT || 3000;
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT, () =>
    console.log(
      `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
        .bold,
    ),
  );
}
bootstrap();
