import express from 'express'
import cors from 'cors'

const app = express();
const port = 3000;

const oauth_states = {}

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/oauth_state', (req, res) => {
  const token = req.query.token
  if (token && token in oauth_states) {
    res.json(oauth_states[token])
  } else {
    res.sendStatus(404);
  }
});

app.post('/oauth_state', (req, res) => {
  // TODO: add expiration time

  const token = req.query.token // TODO: stop accepting token in query, use header instead
  if (token) {
    oauth_states[token] = {
      ...req.body,
      valid: true
    }
    res.sendStatus(200);
  } else {
    res.sendStatus(404);
  }
});

app.listen(port, () => {
  console.log(`Express server listening at port ${port}`);
});