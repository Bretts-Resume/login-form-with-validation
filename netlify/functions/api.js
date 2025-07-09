const express = require('express');
const serverless = require('serverless-http');

const app = express();
const router = express.Router();

router.post('/login', (req, res) => {
  const { email, password } = JSON.parse(req.body);

  if (email === 'test@example.com' && password === 'password123') {
    return res.json({ success: true, message: 'Login successful' });
  }

  res.status(401).json({ success: false, message: 'Invalid credentials' });
});

app.use('/.netlify/functions/api', router);

module.exports.handler = serverless(app);
