/** @type {import('jest').Config} */
module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	verbose: true,
	moduleNameMapper: {
		'^~configuration/(.*)$': '<rootDir>/src/configuration/$1',
		'^~domain/(.*)$': '<rootDir>/src/domain/$1',
		'^~controller/(.*)$': '<rootDir>/src/controller/$1',
		'^~database/(.*)$': '<rootDir>/src/database/$1',
		'^~usecase/(.*)$': '<rootDir>/src/usecase/$1',
	},
};
