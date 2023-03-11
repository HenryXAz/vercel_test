const express = require('express')

const app = express()

const PORT = process.env.PORT || 3030

app.get('/test', (req,res) => {
  res.send('test page')
})

app.listen(PORT, () => {
  console.log(`listen on ${PORT}`);
})