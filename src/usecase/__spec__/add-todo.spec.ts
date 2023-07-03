import { Todo } from '~domain/todo';
import { AddTodo } from '../add-todo';
import { TodoMock } from '../../database/__mock__/todo.mock';

describe('AddTodo', () => {
	describe('execute', () => {
		const FROZEN_TIME = new Date('2023-07-03T17:21:13.327Z');

		beforeAll(() => {
			jest.useFakeTimers({
				now: FROZEN_TIME,
			});
		});

		afterAll(() => {
			jest.useRealTimers();
		});

		it('it should save to database correctly', async () => {
			// Arrange
			const mock = TodoMock.mock();
			mock.createMock.mockImplementation(async (todo: Todo): Promise<void> => {
				todo.dangerouslySetId('testing-todo-id');
			});
			const usecase = new AddTodo(mock);

			// Act
			const output = await usecase.execute({
				title: 'testing-title',
				dueDate: new Date('2023-07-03T17:21:13.327Z'),
			});

			// Assert
			expect(output.todoId).toEqual('testing-todo-id');
			expect(mock.createMock).toBeCalledWith(
				expect.objectContaining({
					// FIXME: we cannot test the id because jest did capture the argument by reference.
					// id: null,
					title: 'testing-title',
					isDone: false,
					dueDate: new Date('2023-07-03T17:21:13.327Z'),
					createdAt: FROZEN_TIME,
					updatedAt: FROZEN_TIME,
				}),
			);
		});
	});
});
