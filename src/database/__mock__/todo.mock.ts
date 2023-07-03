import { ITodoRepository } from '../abstract';

type Mocked<T> = {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	[P in keyof T as P extends string ? `${P}Mock` : never]: Readonly<jest.Mock<any, any[]>>;
};

export class TodoMock {
	public static mock(): ITodoRepository & Mocked<ITodoRepository> {
		const findAll = jest.fn();
		const create = jest.fn();
		const update = jest.fn();
		const deleteById = jest.fn();
		return {
			findAll: findAll,
			findAllMock: findAll,
			create: create,
			createMock: create,
			update: update,
			updateMock: update,
			deleteById: deleteById,
			deleteByIdMock: deleteById,
		};
	}
}
