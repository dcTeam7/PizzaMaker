import express from 'express';
import path from 'path';
import generateImage from './generate-image';

const app = express();
const dirname = path.resolve()

app.use(express.static(dirname + '/ui'))

// localhost:3000/resultado
app.get('/resultado', async (req, res) => {
  
  const localPath = await generateImage();

  res.sendFile(localPath);
})

app.listen(3000)