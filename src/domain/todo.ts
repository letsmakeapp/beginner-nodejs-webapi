export class Todo {
	private constructor(
		private readonly _id: string | null,
		private readonly _title: string,
		private readonly _isDone: boolean,
		private _dueDate: Date | null,
		private readonly _createdAt: Date,
		private _updatedAt: Date,
	) {}

	get id(): string | null {
		return this._id;
	}

	get title(): string {
		return this._title;
	}

	get isDone(): boolean {
		return this._isDone;
	}

	get dueDate(): Date | null {
		return this._dueDate;
	}

	get createdAt(): Date {
		return this._createdAt;
	}

	get updatedAt(): Date {
		return this._updatedAt;
	}

	changeDueDate(date: Date | null): void {
		this._dueDate = date;
		this._updatedAt = new Date();
	}

	public static createNew(title: string, dueDate: Date | null): Todo {
		const now = new Date();
		return new Todo(null, title, false, dueDate, now, now);
	}
}
