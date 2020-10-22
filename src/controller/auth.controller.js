import { User } from "../models/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import _ from "lodash";
import config from "config";
import Validator from "../lib/validator";

export default class AuthController {
  static async login(req, res) {
    try {
      const { error } = Validator.Login(req.body);
      if (error)
        return res.status(400).send({
          error_code: "validation_error",
          errors: {
            message: error.details[0].message,
            field: error.details[0].path,
          },
        });

      let user = await User.findOne({ email: req.body.email });
      if (!user)
        return res.status(400).send({
          error_code: "invalid_login",
          message: "Invalid email of password",
        });

      const validPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (!validPassword)
        return res.status(400).send({
          error_code: "invalid_login",
          message: "Invalid email of password",
        });

      const token = jwt.sign(
        { id: user.id },
        process.env.AUTH_KEY || config.get("secretKey"),
        { expiresIn: "1h" }
      );
      user = _.pick(user, [
        "id",
        "firstName",
        "lastName",
        "email",
        "createdAt",
      ]);
      user.token = token;
      res.send(user);
    } catch (e) {
      console.log(e);
    }
  }

  static async logout(req, res) {
    //since we are using jwt token, should be removed from client browser when logout triggered
  }
}
