const app = require('express')();


app.get('/', (req, res) => {
  res.send('Hello there!');
})

app.listen(3001, () => {
  console.log('running on 3001');
})