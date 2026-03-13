const express = require("express")
const multer = require ("multer")
const uploadFile = require("./services/stroge.service")
const postModel = require("./models/post.models")
const cors = require("cors")


const app = express();
app.use(cors())
app.use(express.json())  // middleware only read when raw data send 

const upload = multer({storage: multer.memoryStorage() })   //middleware only read when data comes in file format 


app.post('/create-post', upload.single("image")  , async (req , res) => {    // POST API get data from local machine and put on the backend aws (in this we use ImageKit as aws provider)
    console.log(req.body)
    console.log(req.file)

    const result = await uploadFile(req.file.buffer)

    const post = await postModel.create({
        image: result.url,
        caption: req.body.caption,
    })

    return res.status(201).json({
        message: "Post Created Successfully",
        post
    })
})

app.get("/posts" , async (req , res) => {    // GET API fetch data from database and show on the frontend 

    const posts = await postModel.find ()

    return res.status(200).json({
        message: "posts Fetched Successfully ",
        posts
    })
})

module.exports = app