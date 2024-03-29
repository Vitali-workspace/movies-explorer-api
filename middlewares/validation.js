const { celebrate, Joi } = require('celebrate');
const { regUrl, regExpEmail } = require('../utils/constants');

module.exports.validatorCreateMovie = celebrate({
  body: Joi.object().keys({
    country: Joi.string().required(),
    director: Joi.string().required(),
    duration: Joi.number().required(),
    year: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().pattern(regUrl).required(),
    trailerLink: Joi.string().pattern(regUrl).required(),
    thumbnail: Joi.string().pattern(regUrl).required(),
    movieId: Joi.number().unsafe().required(),
    nameRU: Joi.string().required(),
    nameEN: Joi.string().required(),
  }),
});

module.exports.validatorLogin = celebrate({
  body: Joi.object().keys({
    email: Joi.string().invalid(null, '').required().regex(regExpEmail),
    password: Joi.string().invalid(null, '').required(),
  }),
});

module.exports.validatorRegistration = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(3).max(30).required(),
    email: Joi.string().invalid(null, '').required().regex(regExpEmail),
    password: Joi.string().invalid(null, '').required(),
  }),
});

module.exports.validatorDeleteMovie = celebrate({
  params: Joi.object().keys(
    { _id: Joi.string().hex().length(24).required() },
  ),
});

module.exports.validatorUpdateUser = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(3).max(30).required(),
    email: Joi.string().invalid(null, '').regex(regExpEmail).required(),
  }),
});
