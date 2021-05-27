const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;
const distDir = path.join(__dirname, '../dist');
const htmlFile = path.join(distDir, 'index.html');

app.use(express.static(distDir));
app.get('/', (req, res) => res.sendFile(htmlFile));

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));