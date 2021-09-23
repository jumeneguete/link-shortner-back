import Joi from "joi";

const signUpBodySchema = Joi.object({
  name: Joi.string().required(),
  image: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

export { signUpBodySchema };
