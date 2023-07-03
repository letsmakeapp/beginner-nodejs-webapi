import { ITodoRepository } from '../../database/Abstract';
import { Todo } from '../../domain/todo';
import { AddTodo } from '../AddTodo';

describe('AddTodo', () => {
	describe('execute', () => {
		it('it should save to database correctly', async () => {
			// Arrange
			const mockRepoCreate = jest.fn().mockImplementation(async (todo: Todo): Promise<void> => {
				todo.dangerouslySetId('testing-todo-id');
			});
			const usecase = new AddTodo({
				create: mockRepoCreate,
			} as ITodoRepository);

			// Act
			const output = await usecase.execute({
				userId: 'tesing-user-id',
				title: 'testing-title',
				dueDate: new Date('2023-07-03T17:21:13.327Z'),
			});

			// Assert
			expect(output.todoId).toEqual('testing-todo-id');
			expect(mockRepoCreate).toBeCalledTimes(1);
		});
	});
});
