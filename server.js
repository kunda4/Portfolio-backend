import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import morgan from "morgan";
import mongoose from "mongoose";
import routes from "./src/routes/allRoutes.js";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import booksRoute from "./src/routes/booksRoute.js"
import registerRoute from './src/routes/registerRoute.js';
import loginRoute from "./src/routes/loginRoute.js";

// configure dotenv

dotenv.config();

//create app instance
const app = express();

//use app instance
app.use(cors());
app.use(bodyParser.json())

// use morgan for logs
if(process.env.NODE_ENV === "development"){
    app.use(morgan());
};

//use all routes
app .use("/api/v1", routes);

//define Host and Port
const host = process.env.HOST;
const port = process.env.PORT;

// Mongo db connection instance
const con = () => mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
//Listening to your server instance 
const startServer = ()=> app.listen(port)

//Promise to await for both con and startServer instance
Promise.all([con(), startServer()])
.then(()=>{
    console.log("Mongo db Connected....");
    console.log(`Server start listening to ${port}`)
})
.catch((err)=>{
    console.log(err);
})
app.use('/api/v1', loginRoute);
app.use('/api/v1', registerRoute);
app.use('/api/v1', booksRoute);


// Set up Swagger documentation
import swaggerDefinition from './swagger.json' assert { type: "json" };
const options = {
    swaggerDefinition,
    apis: ['../routes/*.js'], // Path to the API routes files
};
const swaggerSpec = swaggerJSDoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

