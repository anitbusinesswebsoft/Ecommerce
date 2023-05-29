const express = require('express')
const cors = require('cors')
const app = express()
const userRouter = require("./routes/users/users")
const connectDb = require("./db/db")

const port = 4000
connectDb()
app.use(cors())
app.use(express.json())
app.use("/auth", userRouter)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})