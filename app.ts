import express, { Request, Response } from 'express'
const axios = require('axios')
const cors = require('cors')

const router = express.Router()
const app = express()
const port = 3030

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

axios.defaults.withCredentials = true;

// app.get('/', function(req: Request, res: Response){
//   const userName = req.body._userName
//   const userEmail = req.body._userEmail
//   const userPw = req.body._userPw
// console.log(userName);
// console.log(userEmail);
// console.log(userPw);
// })

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})