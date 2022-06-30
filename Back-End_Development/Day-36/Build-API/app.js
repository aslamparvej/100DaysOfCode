import express from "express";
import bodyParser from "body-parser";

import usersRoutes from './routes/users.js';

const app = express();
const PORT = 3000;

app.use(bodyParser.json()); // middleware

app.use('/users', usersRoutes);

app.get('/', (req,res)=>{
    console.log("TEST!");
    res.send("Hello from Home Page!");
})
//Routing
app
app.listen(PORT, ()=>{
    console.log(`Server running on PORT: http://localhost:${PORT}`);
});
