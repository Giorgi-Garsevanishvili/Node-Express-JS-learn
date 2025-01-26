const express = require("express");
const app = express();
const tasks = require('./routes/tasks')

//middleware
app.use(express.json())

//routes
app.use('/api/v1/tasks', tasks)

const port = 3000

app.listen(port, console.log(`Server is listening on port:${port}...`)
)

// const http = require('http')

// const server = http.createServer((req, res) => {
//   const url = req.url

//   if(url === '/'){
//     console.log('Hey')
//     res.write('hi')
//     res.end()
//   }
// })

// server.listen(5000)
