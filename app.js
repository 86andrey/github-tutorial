


const Joi = require('joi');
const a = Joi.string().min(3).max(8).alphanum();
console.log(a.validate('dfghheh'));