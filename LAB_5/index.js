const express = require('express')
const app = express()
const cors = require('cors');
const PORT = 8000
 
let tasks = [
   { id: 1, name: 'Do homework' },
   { id: 2, name: 'Read book' },
   { id: 3, name: 'Write a program' }]
 
app.use(cors())
 
app.get('/', (req,res) => {
   res.json(tasks)
})
 
app.listen(PORT, () => console.log(`listen at ${PORT}`))