import { Todo } from '~domain/todo';

export interface ITodoRepository {
	findAll(): Promise<Todo[]>;
	create(todo: Todo): Promise<void>;
	update(todo: Todo): Promise<void>;
	deleteById(todoId: string): Promise<void>;
}
