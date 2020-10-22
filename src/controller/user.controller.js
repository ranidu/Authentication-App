import { User } from "../models/user";
import bcrypt from "bcrypt";
import _ from "lodash";
import Validator from "../lib/validator";

export default class UserController {
  static async create(req, res) {
    try {
      const { error } = Validator.Register(req.body);
      if (error)
        return res.status(400).send({
          error_code: "validation_error",
          errors: {
            message: error.details[0].message,
            field: error.details[0].path,
          },
        });

      let user = await User.findOne({ email: req.body.email });
      if (user)
        return res.status(400).send({
          error_code: "user_already_exists",
          message: "User already registered",
        });

      user = _.pick(req.body, ["firstName", "lastName", "email", "password"]);

      const password_salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(user.password, password_salt);

      user = await User(user).save();
      res.send(
        _.pick(user, ["_id", "firstName", "lastName", "email", "createdAt"])
      );
    } catch (e) {
      console.log(e);
    }
  }

  static async me(req, res) {
    try{
      const user = await User.findOne({ _id: req.user.id });
      res.send(
        _.pick(user, ["_id", "firstName", "lastName", "email", "createdAt"])
      );
    }catch(e){
      console.log(e)
    }
  }
}
