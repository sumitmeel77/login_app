const express = require("express")
const mongoose = require('mongoose')
const { User, Product } = require("./model/user.js")
// const Product = require("./model/data.js")
const cors = require('cors');


const port = process.env.PORT || 5000;

// const { MongoClient } = require('mongodb');

const url = "mongodb+srv://Username:Password@cluster0.kvdz1.mongodb.net/loginApp?retryWrites=true&w=majority";




// connecting with mongoose
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => { console.log("connection successfull") }).catch((err) => console.log(err))

const app = express()

app.use(cors());

app.use(express.json());


//Acccessing data from server side on web app
// Adding login
app.post("/api/login", async (req, res) => {

    //checking whether username and password are correct or not
    const { email, password } = req.body
    // first searching the username and then checking whether password is correct or not
    const user = await User.findOne({ email }).lean()
    if (!user) {
        return res.json({ status: 'error', error: 'Invalid username/password' })
    }
    if (user.password === password) {
        return res.json({ status: "ok" })
    }
    res.json({ status: 'error', error: 'Invalid username/password' })
})

app.get("/data", function (req, res, next) {
    Product.find({ category: "Database" })
        .then(data => {
            res.json(data)
        })
        .catch(error => {
            console.log(error);
        })

})
// function paginatedResults() {
//     return async (req, res, next) => {

//         const page = parseInt(req.query.page);
//         const limit = parseInt(req.query.limit);
//         const skipIndex = (page - 1) * limit;
//         const results = {};

//         try {
//             results.results = await Product.find({ category: "Database" })
//                 .limit(limit)
//             // .skip(skipIndex)
//             res.paginatedResults = results;
//             console.log(results)
//             next();
//         } catch (e) {
//             res.status(500).json({ message: "Error Occured" });
//         }
//     };
// }
// app.get("/data", paginatedResults(), (req, res) => {

//     res.json(res.paginatedResults)

// })

app.listen(port, () => {
    console.log(`server at ${port}`)
}
)