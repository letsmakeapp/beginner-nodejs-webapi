import { min } from '../min';

describe('min', () => {
	it('should return the smaller of two numbers', () => {
		// Arrange
		const a = 1;
		const b = 2;

		// Act
		const output = min(a, b);

		// Assert
		expect(output).toEqual(1);
	});
});
