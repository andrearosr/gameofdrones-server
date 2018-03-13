import status from "http-status";
import axios from "axios";

import Weapon from "./weapon.model";
import config from "../../config/env";
import { APIError } from "../../helpers/errors";
import { paginate } from "../../helpers/utils";

const WeaponController = {
  /**
   * @swagger
   * /weapons:
   *   get:
   *     tags:
   *      - Weapon
   *     description: Show all weapons
   *     produces:
   *       - application/json
   *     responses:
   *       200:
   *         description: return an array of users'
   */

  async readAll(req, res) {
    const weapons = await Weapon.find()
    res.json(weapons);
  },
};

export default WeaponController;
