/* eslint-disable import/no-extraneous-dependencies */
const express = require("express");
const history = require("connect-history-api-fallback");
const expressStaticGzip = require('express-static-gzip');
const helmet = require("helmet");
const path = require("path");

const port = process.env.PORT || 3000;
const staticFiles = expressStaticGzip(path.join(__dirname, '../', "dist"));

const app = express();
app.use(helmet());
app.use(staticFiles);
app.use(history());
app.listen(port);
app.use(staticFiles)