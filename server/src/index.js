import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import authController from "./auth/auth.controller.js"
import userController from "./user/user.controller.js"
import filmController from "./film/film.controller.js"
import bioskopController from "./bioskop/bioskop.controller.js"
import jadwalController from "./jadwal/jadwal.controller.js"
import imageController from "./image/image.controller.js"

// import unknownEndPoint from './middleware/unknownEndpoint.js';
const app = express()

dotenv.config()
const port = 2000
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('Tickit api!')
})

app.use('/api/auth/', authController)
app.use('/api/', userController)
app.use('/api/', filmController)
app.use('/api/', bioskopController)
app.use('/api/', jadwalController)
app.use('/api/', imageController)

app.listen(port, () => {
  console.log(`Tickit is listening on port ${port}`)
})
