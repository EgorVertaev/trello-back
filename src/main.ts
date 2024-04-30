import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

import * as coockieParser from 'cookie-parser'

async function bootstrap() {
	const app = await NestFactory.create(AppModule)

	app.setGlobalPrefix('api') // Добавляет префикс для всех ендпонитов localhost:4200/api
	app.enableCors({
		origin: ['http://localhost:3000'],
		credentials: true,
		exposedHeaders: 'set-cookie'
	})
	app.use(coockieParser())

	await app.listen(4100)
}

bootstrap()
