import { model, Schema } from "mongoose";

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minLenght: 8,
  },
  email: {
    type: String,
    required: true,
  },
});

const User = model("User", userSchema, "users");
export default User;
