import User from '../models/userModel.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const authControllers = {
  register: async (req, res) => {
    try {
      const {
        firstname,
        lastname,
        gender,
        phoneNumber,
        dateOfBirth,
        highestQualification,
        email,
        password,
      } = req.body;

      const user = await User.findOne({ email });
      if (user)
        return res.status(400).json({ msg: 'This email already exists.' });

      const hashPassword = await bcrypt.hash(password, 12);
      const newUser = await User({
        firstname,
        lastname,
        gender,
        phoneNumber,
        dateOfBirth,
        highestQualification,
        email,
        password: hashPassword,
      });

      await newUser.save();
      newUser.password = undefined;

      return res
        .status(200)
        .json({ msg: 'Registered Successfully!!!', data: newUser });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  login: async (req, res) => {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({ email });
      if (!user)
        return res.status(400).json({ msg: 'This email does not exists.' });

      const confirmPassword = await bcrypt.compare(password, user.password);
      if (!confirmPassword)
        return res.status(400).json({ msg: 'This password is incorrect.' });

      const token = await jwt.sign({ _id: user._id }, process.env.JWT_SECRET);

      user.password = undefined;
      return res
        .status(200)
        .json({ msg: 'Login Successfully!!!', token, data: user });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

export default authControllers;
