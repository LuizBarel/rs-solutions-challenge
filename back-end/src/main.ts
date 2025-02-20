import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
declare const module: {
    hot?: {
        accept: () => void;
        dispose: (callback: () => void) => void;
    };
};

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.enableCors({
        origin: 'http://localhost:3000',
        methods: 'GET,POST,PUT,DELETE',
        allowedHeaders: 'Content-Type,Authorization',
    });
    app.useGlobalPipes(
        new ValidationPipe({
            transform: true,
            whitelist: true,
        }),
    );
    await app.listen(process.env.PORT ?? 3001);

    if (module.hot) {
        module.hot.accept();
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        module.hot.dispose(() => app.close());
    }
}

// eslint-disable-next-line @typescript-eslint/no-floating-promises
bootstrap();
