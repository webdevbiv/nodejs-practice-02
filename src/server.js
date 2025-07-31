import getEnv from './utils/getEnv.js';
import app from './app.js';
import { connectToDatabase } from './db.js';

async function bootstrap() {
  await connectToDatabase();

  const PORT = getEnv('PORT', 8080);

  app.listen(PORT, (error) => {
    if (error) {
      console.error(`Error starting server: ${error.message}`);
    } else {
      console.log(`Server is running on port ${PORT}`);
    }
  });
}

bootstrap().catch((error) =>
  console.error(`Error during bootstrap: ${error.message}`),
);
