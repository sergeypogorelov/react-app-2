const path = require('path');
const express = require('express');

const app = express();

const foldersByEnv = {
  DEV: 'build-dev',
  PROD: 'build-prod',
};

const ENV = process.env.npm_package_config_ENV_NODE_ENV;
const BUILD_FOLDER = foldersByEnv[ENV];

const staticPath = path.resolve(__dirname, `../../${BUILD_FOLDER}`);
app.use(express.static(staticPath));

app.use('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, `../../${BUILD_FOLDER}/index.html`));
});

const port = 8080;
app.listen(port, () => console.log(`Listening on ${port}.`));
