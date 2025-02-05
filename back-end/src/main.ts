import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
declare const module: any;

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    await app.listen(process.env.PORT ?? 3001);

    if (module.hot) {
        module.hot.accept();
        module.hot.dispose(() => app.close());
    }
}

// eslint-disable-next-line @typescript-eslint/no-floating-promises
bootstrap();
