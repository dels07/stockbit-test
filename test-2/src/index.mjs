import dotenv from 'dotenv';

dotenv.config();

import app from './main.mjs';

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`App running on port: ${port}`);
});