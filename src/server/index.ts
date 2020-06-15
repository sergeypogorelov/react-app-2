import path from 'path';
import express from 'express';

const foldersByEnv: Record<string, string> = {
  DEV: 'dist-dev',
  PROD: 'dist-prod',
};

const app = express();

const ENV = process.env.NODE_APP_ENV;
const BUILD_FOLDER = foldersByEnv[ENV];

const staticPath = path.resolve(__dirname, `../../${BUILD_FOLDER}`);
app.use(express.static(staticPath));

app.get('*', (req, res, next) => {
  if (req.url.includes('.')) {
    return next();
  }

  res.sendFile(path.resolve(__dirname, `../../${BUILD_FOLDER}/index.html`));
});

const port = 4200;
app.listen(port, () =>
  console.log(
    `Client is built in ${ENV} mode. Server is listening on http://localhost:${port}`
  )
);
