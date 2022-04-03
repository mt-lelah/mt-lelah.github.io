import path from "path";
import express from "express";
const app = express();

import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const PORT = 8001;

app.use(express.static('docs'));

app.listen(PORT);