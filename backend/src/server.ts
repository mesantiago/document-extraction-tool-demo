import app from './app';
import config from './config';
import initializeOpenAi from './connectors/openai';

initializeOpenAi();

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});