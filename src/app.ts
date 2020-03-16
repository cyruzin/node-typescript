import express, { Request, Response } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import morgan from 'morgan'

dotenv.config()

const app = express()

app.use(cors(), morgan('dev'))

app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Hello from the server!' })
})

app.listen(3000, () => console.log('Listening on port: 3000'))
