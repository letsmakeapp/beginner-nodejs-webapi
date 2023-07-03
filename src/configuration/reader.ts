export type ConfigurationValue = Readonly<{
	port: number;
}>;

export class Configuration {
	static read(): Readonly<ConfigurationValue> {
		const port = Number(process.env.PORT ?? '3000');
		return {
			port,
		};
	}
}
