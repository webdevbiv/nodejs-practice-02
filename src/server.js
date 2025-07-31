import app from './app.js';
import { connectToDatabase } from './db.js';

connectToDatabase();

function bootstrap() {
  const PORT = process.env.PORT || 8080;

  app.listen(PORT, (error) => {
    if (error) {
      console.error(`Error starting server: ${error.message}`);
    }

    console.log(`Server is running on port ${PORT}`);
  });
}

bootstrap();
