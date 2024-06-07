const express = require("express")
const cors = require("cors")

const app = express()

require("dotenv").config()

const mongoose = require("mongoose")

mongoose.connect(process.env.MONGO_URL)

app.use(express.json())
app.use(cors())

app.use("/api/todos", require("./routes/todo.routes"))

app.use("*", (req, res) => {
    res.status(404).json({ message: "Resource Not Found" })
})
app.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({ message: "Server Error", err: err.message })
})

mongoose.connection.once("open", () => {
    app.listen(process.env.PORT, console.log("server running"))
    console.log("MONGO CONNECTED")
})