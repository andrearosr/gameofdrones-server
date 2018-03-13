import express from "express";
import validate from "express-validation";

import User from "./user.controller";
import userValidator from "../../services/validations/user";
import { catchErrors } from "../../helpers/errors";

const router = express.Router(); // eslint-disable-line new-cap

validate.options({
  allowUnknownBody: false
});

router
  .route("/users")
  .get(catchErrors(User.readAll))
  .post(validate(userValidator.create), catchErrors(User.create))

router
  .route("/users/:id/win")
  .patch(validate(userValidator.addWin), catchErrors(User.addWin))

export default router;
