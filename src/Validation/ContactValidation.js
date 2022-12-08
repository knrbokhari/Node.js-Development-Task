const Joi = require("joi");

const schema = Joi.object().keys({
    name: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    phone: Joi.string().min(10).pattern(/^[0-9]+$/).required(),
    address1: Joi.string().min(5).required(),
    address2: Joi.string().min(5),
})

const contactValidation = (data) => {
    const result = schema.validate(data);
    result.value = data;
    return result;
};

module.exports = contactValidation;