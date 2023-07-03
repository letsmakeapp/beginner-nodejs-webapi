import { Controller, Get, Param } from 'routing-controllers';

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

	@Get('/:id')
	getTodoById(@Param('id') id: string): TodoViewModel {
		return {
			id: id,
			title: 'Buy milk',
			is_done: false,
			due_date: null,
			created_at: new Date(),
			updated_at: new Date(),
		};
	}
}
