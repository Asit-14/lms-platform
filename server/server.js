import dotenv from 'dotenv';
import app from './app.js';
import connectionToDB from './config/dbConnection.js';
dotenv.config();

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  await connectionToDB();
  console.log(`✅ Server is running at: ${PORT}`);
});
