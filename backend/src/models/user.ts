import mongoose from "mongoose";
export type UserType = {
  _id: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

const userSchema = new mongoose.Schema({
  email: {
    type: mongoose.Schema.Types.String,
    required: true,
    unquie: true,
  },
  password: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
  firstName: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
  lastName: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
});
const User=mongoose.model<UserType>("User",userSchema);

export default User;