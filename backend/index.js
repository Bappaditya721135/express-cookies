import express from "express"
import cors from "cors"


const app = express();
app.use(cors({
    origin: "https://delicate-sprinkles-11f6af.netlify.app",
    methods: ["GET", "POST"],
    credentials: true,
}))
app.use(express.json())


app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "this is the get page"
    })
})


app.post("/login", (req, res) => {
    const {email, password} = req.body;
    if(email === "myemail@gmail.com" && password === "password") {
        return res.cookie("token","this is token", {
            maxAge: 300000,
            sameSite: "none",
            secure: true,
        }).json({
            success: true,
            message: "login successfull"
        })
    }
    res.json({
        success: false,
        message: "invalid credentials"
    })
})


app.listen(5000, () => {
    console.log("cors enabled")
})