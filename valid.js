const express = require ("express");
const Joi = require ("joi");
const app = express();

app.use (express.json());

const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().password().required(),

});

app.post = ("/login", (req, res)=>{
    const {error, value} = loginSchema.validate(req.body, {
        abortEarly: false,
    });

    if(error){
        console.log(error);
        return res.send(error.details);
    }
    res.send("successfully signed in")
});

app.listen(4000, ()=>{
    conslole.log("server started at port 4000");
});