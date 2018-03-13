import mongoose from "mongoose";
import validate from "mongoose-validator";
import uniqueValidator from "mongoose-unique-validator";
import crypto from "crypto";

// import { average } from '../helpers/utils';
import config from "../../config/env";

const Schema = mongoose.Schema;

/**
 * @swagger
 * definition:
 *   listOfUsers:
 *     type: array
 *     items:
 *       $ref: '#/definitions/User'
 *   User:
 *     type: object
 *     properties:
 *       name:
 *         type: string
 *       score:
 *         type: integer
 *     required:
 *       - name
 */

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: "name is required"
    },
    score: {
      type: Number,
      default: 0
    }
  },
  {
    toObject: { virtuals: true },
    toJSON: { virtuals: true }
  }
);

UserSchema.index({ name: "text" });
UserSchema.plugin(uniqueValidator);
UserSchema.statics.findOneOrCreate = function findOneOrCreate(condition, callback) {
    const self = this
    self.findOne(condition, (err, result) => {
        return result ? callback(err, result) : self.create(condition, (err, result) => { return callback(err, result) })
    })
}

export default mongoose.model("User", UserSchema);
