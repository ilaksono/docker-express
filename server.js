const app = require('express')();


app.get('/', (req, res) => {
  res.send('Hello there!');
})

app.listen(8002, () => {
  console.log('running on 8002');
})