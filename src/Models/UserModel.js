import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
    {
      username: String,
      password: String,
      role:{
          type:String,
          default:"user"
      }
    },
    { timestamps: true }
  );
 export const UserModel = mongoose.model("User", userSchema);