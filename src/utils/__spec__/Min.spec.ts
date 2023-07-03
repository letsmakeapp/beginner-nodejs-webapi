import { Min } from '../Min';

describe('Min', () => {
	it('should return the smaller of two numbers', () => {
		// Arrange
		const a = 1;
		const b = 2;

		// Act
		const output = Min(a, b);

		// Assert
		expect(output).toEqual(1);
	});
});
