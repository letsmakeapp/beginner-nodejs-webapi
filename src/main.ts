import 'reflect-metadata';

import express from 'express';
import { useExpressServer } from 'routing-controllers';

import { TodoController } from '~controller/todo';
import { Configuration } from '~configuration/reader';

async function main(): Promise<void> {
	const config = Configuration.read();
	const app = express();

	useExpressServer(app, {
		controllers: [TodoController],
	});

	app.listen(config.port);
}

void main();
