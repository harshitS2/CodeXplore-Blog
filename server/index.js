import express from "express"
import userRouter from "./routes/user.route.js"
import postRouter from "./routes/post.route.js"
import commentRouter from "./routes/comment.route.js"
import { connectDB } from "./lib/connectDB.js"
const app = express();

app.get("/", (req, res) => {
    res.status(200).send("HomePage request")
})
app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/comments", commentRouter);
app.listen(3000, () => {
    connectDB();
    console.log("Server is running!");
})