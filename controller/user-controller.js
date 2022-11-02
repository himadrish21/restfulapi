const User = require("../model/User");

const getAllUsers = async (req, res, next) => {
  let users;
  try {
    users = await User.find();
  } catch (err) {
    return next(err);
  }
  if (!users) {
    return res.status(500).json({ message: "not found" });
  }
  return res.status(200).json({ users });
};

const addUser = async (req, res, next) => {
  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    department,
    position,
    salary,
    location,
  } = req.body;
  if (
    !firstName &&
    firstName.trim() == "" &&
    !email &&
    email.trim() == "") {
    return res.status(422).json({ message: "Invalid Data" });
  }
  let user;
  try {
        user =new User({firstName,
            lastName,
            email,
            phoneNumber,
            department,
            position,
            salary,
            location,
        });
        user=await user.save();
  } catch (err) {
    return next(err);
  }
  if (!user) {
    return res.status(500).json({ message: "unable to save user" });
  }
    return res.status(201).json({user});
};


const updateUser=async(req,res,next)=>{
    const id = req.params.id;
    const {
        firstName,
        lastName,
        email,
        phoneNumber,
        department,
        position,
        salary,
        location,
      } = req.body;
      if (
        !firstName &&
        firstName.trim() == "" &&
        !email &&
        email.trim() == "") {
        return res.status(422).json({ message: "Invalid Data" });
      }

      let user ;
      try {
        user = await User.findByIdAndUpdate(id,{firstName,lastName,email,phoneNumber,department,position,salary,location})
      } catch (err) {
        return next(err);
      }
      if (!user) {
        return res.status(500).json({ message: "unable to update and save user" });
      }
        return res.status(200).json({message:"updated Sucessfully"});
}

const deleteUser = async(req,res,next)=>{
    const id = req.params.id;
    let user;
    try {
        user =await User.findByIdAndRemove(id);
    } catch (err) {
        return next(err)
    }
    if (!user) {
        return res.status(500).json({ message: "unable to delete" });
      }
        return res.status(200).json({message:"delete Sucessfully"});
}

const findUser = async(req,res,next)=>{
    const id =req.params.id;
    let user;
    try {
        user =await User.findById(id);
    } catch (err) {
        return next(err);
    }
    if (!user) {
        return res.status(404).json({ message: "unable to find user with this id" });
      }
     return res.status(200).json({user});
}

exports.getAllUsers = getAllUsers;
exports.findUser=findUser;
exports.addUser=addUser;
exports.updateUser =updateUser;
exports.deleteUser=deleteUser;
