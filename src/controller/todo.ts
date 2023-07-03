import { Controller, Get, Post, Req } from 'routing-controllers';
import { Request } from 'express';
import { IUseCase } from '../usecase/Abstract';
import { AddTodoInput, AddTodoOutput } from '../usecase/AddTodo';

type TodoViewModel = {
	id: string;
	title: string;
	is_done: boolean;
	due_date: Date | null;
	created_at: Date;
	updated_at: Date;
};

@Controller('/todos')
export class TodoController {
	constructor(private readonly addTodo: IUseCase<AddTodoInput, AddTodoOutput>) {}

	@Get()
	getAllTodos(): TodoViewModel[] {
		return [
			{
				id: '1',
				title: 'Buy milk',
				is_done: false,
				due_date: null,
				created_at: new Date(),
				updated_at: new Date(),
			},
		];
	}

	@Post()
	async createTodo(@Req() req: Request) {
		type RequestBody = {
			user_id: string;
			title: string;
			due_date: Date;
		};

		const body = req.body as RequestBody;
		const output = await this.addTodo.execute({
			userId: body.user_id,
			title: body.title,
			dueDate: body.due_date,
		});

		type ResponseBody = {
			todo_id: string;
		};

		return <ResponseBody>{
			todo_id: output.todoId,
		};
	}
}
