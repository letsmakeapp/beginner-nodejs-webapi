import { ITodoRepository } from '~database/abstract';
import { Todo } from '~domain/todo';
import { IUseCase } from './abstract';

export type AddTodoInput = {
	title: string;
	dueDate: Date | null;
};

export type AddTodoOutput = {
	todoId: string;
};

export class AddTodo implements IUseCase<AddTodoInput, AddTodoOutput> {
	constructor(private readonly repo: ITodoRepository) {}

	async execute(input: AddTodoInput): Promise<AddTodoOutput> {
		const todo = Todo.createNew(input.title, input.dueDate);
		await this.repo.create(todo);
		if (todo.id === null) {
			throw new Error('an id of a todo is null');
		}

		return {
			todoId: todo.id,
		};
	}
}
