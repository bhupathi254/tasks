import Joi from 'joi';

export const task1 = Joi.object({
    input: Joi.array().items(Joi.number().min(1)).min(1).required()
})
export const task2 = Joi.object({
    input: Joi.string().required()
})
