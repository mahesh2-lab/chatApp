import User from "../models/user.model.js";
import bycrypt from "bcryptjs";
import genrateTokenAndSetCookie from "../utils/genrateToken.js";

export const signup = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({ msg: "Password do not match" });
    }

    const user = await User.findOne({ username });

    if (user) {
      return res.status(400).json({ msg: "Username already exists" });
    }

    const salt = await bycrypt.genSalt(10);
    const hashedPassword = await bycrypt.hash(password, salt);

    const boyProilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newUser = new User({
      fullName,
      username,
      password: hashedPassword,
      gender,
      profilePic: gender === "male" ? boyProilePic : girlProilePic,
    });

    if (newUser) {
      genrateTokenAndSetCookie(res, newUser._id);
      await newUser.save();
      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        username: newUser.username,
        profilePic: newUser.profilePic,
      });
    } else {
      res.status(400).json({ msg: "User not created" });
    }
  } catch (error) {
    res.status(500).json({ msg: error.message });
    console.log("error in signup", error);
  }
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    const isPasswordCoreect = await bycrypt.compare(password, user?.password || '');

    if(!user || !isPasswordCoreect){
      return res.status(400).json({error:"Invalid username or password"});
    }
    genrateTokenAndSetCookie(res, user._id);
    res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      username: user.username,
      profilePic: user.profilePic,
    });

  } catch (error) {
    error;
    res.status(500).json({ msg: error.message });
    console.log("error in login", error);
  }
};

export const logout = (req, res) => {
 try {
    res.cookie('jwt', "" , {maxAge: 0});
    res.status(200).json({msg:"logged out successfully"});
 } catch (error) {
    res.status(500).json({ msg: error.message });
    console.log("error in login", error);
 }
};
