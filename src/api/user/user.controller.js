import mongoose from 'mongoose';
import status from "http-status";
import axios from "axios";

import User from "./user.model";
import config from "../../config/env";
import { APIError } from "../../helpers/errors";
import { paginate } from "../../helpers/utils";

const UserController = {
  /**
   * @swagger
   * /users:
   *   get:
   *     tags:
   *      - User
   *     description: Show all users
   *     produces:
   *       - application/json
   *     responses:
   *       200:
   *         description: return an array of users'
   */

  async readAll(req, res) {
    const users = await User.find({}, null, { sort: { score: -1 }});
    res.json(users);
  },

  /**
   * @swagger
   * /users:
   *   post:
   *     tags:
   *      - User
   *     description: Find or create user
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: user
   *         description: user object.
   *         in: body
   *         required: true
   *         schema:
   *           $ref: '#/definitions/User'
   *     responses:
   *       200:
   *         description: Successfully created
   *         schema:
   *           allOf:
   *              - $ref: '#/definitions/User'
   *              - properties:
   *                  id:
   *                    type: string
   *                  name:
   *                    type: string
   *                  score:
   *                    type: integer
   */
  async findOrCreate(req, res) {
    const { name } = req.body
    const user = await User.findOrCreate({ name });
    res.status(status.OK).json(user);
  },

  /**
   * @swagger
   * /users/{id}/win:
   *   patch:
   *     tags:
   *      - User
   *     description: Save a new game for a user
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: id
   *         in: path
   *         required: true
   *         description: hotel id
   *         type: string
   *     responses:
   *       200:
   *         description: return an array of users'
   */

   async addWin(req, res) {
      const { id } = req.params;

      if (!mongoose.Types.ObjectId.isValid(id)) {
        console.log('invalid')
        throw new APIError(`Invalid objectId`, status.BAD_REQUEST);
      }

      const user = await User.findById(id)

      if (!user) throw new APIError('User not found', status.NOT_FOUND);

      user.score = user.score + 1;
      const updatedUser = await user.save();

      res.status(status.OK).json(updatedUser);
   },

};

export default UserController;
