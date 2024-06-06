import { UserModel } from "../Models/UserModel.js";
import  jwt  from "jsonwebtoken";

export const handleLogin =async (req, res) => {
  const {username,password}= req.body;
  const user = UserModel.findOne({username});
  if(!user){
    res.send("user not found")
    return
  }
  if(user.password ===password){
    res.send("password is not correct")
    return
  }
  var token = jwt.sign({ username,role:user.role}, 'sadsadasdasdsad123123',{ expiresIn: '1h' });
  res.json(token)
};
export const handleRegister =async (req, res) => {
  const newUser = new UserModel(req.body);
  var token = jwt.sign({username:newUser.username,role:"user"}, 'sadsadasdasdsad123123',{ expiresIn: '1h' });
  await newUser.save();
  res.json(token)

};