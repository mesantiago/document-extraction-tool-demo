interface Config {
  port: number;
  nodeEnv: string;
  clientUrl: string;
}

const config: Config = {
  port: Number(process.env.PORT) || 3000,
  nodeEnv: process.env.NODE_ENV || 'development',
  clientUrl: process.env.REACT_CLIENT_URL || 'http://localhost:3001',
};

export default config;