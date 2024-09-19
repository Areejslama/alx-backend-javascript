import mapRoutes from './routes';
import express from 'express'

const app = express();
const port = 1245;

mapRoutes(app);
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

export default app;
module.exports = app;
