import express from 'express'

const app = express()

const PORT = process.env.PORT || 3000

app.get('/test', (req,res) => {
  res.send('test page')
})

app.listen(PORT, () => {
  console.log(`listen on ${PORT}`);
})