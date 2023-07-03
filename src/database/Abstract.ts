import { Todo } from '~domain/todo';

export interface ITodoRepository {
	create(todo: Todo): Promise<void>;
}
