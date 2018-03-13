import express from "express";
import validate from "express-validation";

import Weapon from "./weapon.controller";
import weaponValidator from "../../services/validations/weapon";
import { catchErrors } from "../../helpers/errors";

const router = express.Router(); // eslint-disable-line new-cap

validate.options({
  allowUnknownBody: false
});

router
  .route("/weapons")
  .get(catchErrors(Weapon.readAll))

export default router;
