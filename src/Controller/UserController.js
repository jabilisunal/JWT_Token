import { UserModel } from "../Models/UserModel.js";


export const getAllUser =async (req, res) => {
    const users = await UserModel.find({});
    res.send(users);
  };

export const getUserById= async (req, res) => {
    const { id } = req.params;
    const user = await UserModel.findById(id);
    res.send(user);
   
  };
  
 export const createUser =async (req, res) => {
    const { username, password } = req.body;
    const newUser = new UserModel({ username, password });
    await newUser.save();
    res.send(newUser);
  };
  
 export const updateUserById= async (req, res) => {
    const { id } = req.params;
    const user = await carModel.findByIdAndUpdate(id, req.body);
    res.send(user);
  };
  
export const deleteUserById =async (req, res) => {
    const { id } = req.body;
    const user = await UserModel.findByIdAndDelete(id);
    res.send(user);
  };