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
 *   listOfWeapons:
 *     type: array
 *     items:
 *       $ref: '#/definitions/Weapon'
 *   Weapon:
 *     type: object
 *     properties:
 *       name:
 *         type: string
 *       image:
 *         type: string
 *       kills:
 *         type: array
 *         items:
 *           type: object
 *           properties:
 *             weapon:
 *               type: string
 *             label:
 *               type: string
 *     required:
 *       - name
 */

const WeaponSchema = new Schema(
  {
    name: {
      type: String,
      required: "name is required"
    },
    image: String,
    kills: [{
      weapon: String,
      label: String
    }]
  },
  {
    toObject: { virtuals: true },
    toJSON: { virtuals: true }
  }
);

WeaponSchema.index({ name: "text" });

WeaponSchema.plugin(uniqueValidator);

export default mongoose.model("Weapon", WeaponSchema);
