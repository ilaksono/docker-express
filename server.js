const app = require('express')();


app.get('/', (req, res) => {
  res.send('Hello there sir');
})

app.listen(3001, () => {
  console.log('running on 3001');
})

app.get('/users', (req, res) => {
  res.send({name: 'Ian', id: 1});
})