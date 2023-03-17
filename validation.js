const Joi = require('joi');

const validation = (schema) =>(payload) =>
schema.validation(payload, {abortEarly:false});

const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().password().required(),
    confirmPassword: Joi.ref("password"),
    address: {
        state: Joi.string().length(2).required
    },
    DOB:Joi.date().greater(new Date("2012-01-01")).required(),
    referred: Joi.boolean().required(),
    referralDetails: Joi.string().when("refrred",{
        is:true,
        then:Joi.string().required().min(3).max(50),
        otherwise:Joi.string().optional(),
    }),
    hobbies:Joi.array().items([Joi.string(), Joi.number()]),
    acceptTos: Joi.boolean().truthy("Yes").valid(true).required(), 

});

exports.validateLogin = validation(loginSchema)