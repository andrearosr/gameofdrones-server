import objectId from "joi-objectid";
import Joi from "joi";

Joi.objectId = objectId(Joi);

export default {
  findOrCreate: {
    body: {
      name: Joi.string().required(),
      score: Joi.number()
    }
  },

  addWin: {
    path: {
      id: Joi.objectId().required(),
    },
  }
};
