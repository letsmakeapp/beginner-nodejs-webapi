import { Todo } from '../todo';

describe('Todo', () => {
	describe('createNew', () => {
		const FROZEN_TIME = new Date('2023-07-03T16:08:06.678Z');

		beforeAll(() => {
			jest.useFakeTimers({
				now: FROZEN_TIME,
			});
		});

		afterAll(() => {
			jest.useRealTimers();
		});

		it('should set isDone to false', () => {
			const todo = Todo.createNew('test', null);
			expect(todo.isDone).toBe(false);
			expect(todo.createdAt).toEqual(FROZEN_TIME);
		});
	});
});
