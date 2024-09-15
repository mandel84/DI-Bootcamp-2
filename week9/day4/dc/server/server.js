const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); 
app.use(bodyParser.json());

app.get('/api/hello', (req, res) => {
  res.send({ message: "Hello From Express" });
});

app.post('/api/world', (req, res) => {
    console.log('Received POST request:', req.body);
    const responseMessage = `I received your POST request. This is what you sent me: ${req.body.input}`;
    res.send({ message: responseMessage });
  });


const PORT = process.env.PORT || 5012;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
