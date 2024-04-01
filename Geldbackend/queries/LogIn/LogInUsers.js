import jwt from "jsonwebtoken";

import { client } from "../../index.js";
import { compareHash } from "../../utils/password-hash.js";

const query = `SELECT * FROM users WHERE email = $1`;

export const logInUser = async (req, res) => {
  const { email: paramEmail, password } = req.body;

  try {
    const response = await client.query(query, [paramEmail]);

    const user = response.rows[0];

    const passwordCheck = compareHash(password, user.password);
    if (!passwordCheck) {
      throw new Error("Email or Password is incorrect");
    }

    const token = jwt.sign(
      { email: paramEmail },
      process.env.JWT_SECRET || "defaultSecret",
      {
        expiresIn: "1d",
      }
    );
    return { user, token };
  } catch (err) {
    throw new Error(err.message);
  }
};
