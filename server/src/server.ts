import app from './app';

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => console.log(`listening on port ${PORT}`));

process.on('unhandledRejection', (err: NodeJS.ErrnoException) => {
  console.log(`Error : ${err.message}`);
  server.close(() => process.exit(1));
});
