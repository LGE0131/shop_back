import express, { Request, Response, NextFunction } from 'express'
const axios = require('axios')
const cors = require('cors')
const bodyParser = require('body-parser')

const router = express.Router()
const app = express()
const port = 3030

axios.defaults.withCredentials = true;

app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}))

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

app.post('/signup', (req: Request, res: Response) => {
  res.send('응답성공 시바라ㅏㅇ아아ㅏㅇ아ㅏㅇ')
  const user = req.body
  console.log(user);
})



// app.get('/', function(req: Request, res: Response){
//   const userName = req.body._userName
//   const userEmail = req.body._userEmail
//   const userPw = req.body._userPw
// console.log(userName);
// console.log(userEmail);
// console.log(userPw);
// })





// router.get('/', (req: Request, res: Response, next: NextFunction) => {
//     console.log(req.body);
//     res.end()
// })



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})