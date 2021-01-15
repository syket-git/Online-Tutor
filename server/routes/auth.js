const express = require('express');
const router = express.Router();
const StudentRegister = require('../models/auth/StudentRegister');
const TutorRegister = require('../models/auth/TutorRegister');
const { signupValidation, signinValidation } = require('../validation');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//Student Register
router.post('/student/register', async (req, res) => {
  try {
    const { error } = await signupValidation(req.body);
    if (error) return res.status(422).json(error.details[0].message);

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    const Signup = new StudentRegister({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phone: req.body.phone,
      gender: req.body.gender,
      password: hashPassword,
    });

    const existEmail = await StudentRegister.findOne({ email: req.body.email });
    if (existEmail) return res.status(409).json('Email already exist');

    await Signup.save();
    res.json('Sign up successfully completed');
  } catch (error) {
    res.status(400).json({ message: error?.message });
  }
});

//Tutor Register
router.post('/tutor/register', async (req, res) => {
  try {
    const { error } = await signupValidation(req.body);
    if (error) return res.status(422).json(error.details[0].message);

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    const Signup = new TutorRegister({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phone: req.body.phone,
      gender: req.body.gender,
      password: hashPassword,
    });

    const existEmail = await TutorRegister.findOne({ email: req.body.email });
    if (existEmail) return res.status(409).json('Email already exist');

    await Signup.save();
    res.json('Sign up successfully created');
  } catch (error) {
    res.status(400).json({ message: error?.message });
  }
});

//Student Login
router.post('/student/login', async (req, res) => {
  try {
    const { error } = await signinValidation(req.body);
    if (error) return res.status(400).json(error?.details[0].message);

    const user = await StudentRegister.findOne({ email: req.body.email });
    if (!user) return res.status(400).json('Invalid Email or password');

    const validPass = await bcrypt.compare(req.body.password, user.password);
    if (!validPass) return res.status(400).json('Invalid email or password');

    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
    res.header('auth-token', token).send(token);
  } catch (error) {
    res.status(400).json({ message: error?.message });
  }
});

//Tutor Login
router.post('/tutor/login', async (req, res) => {
  try {
    const { error } = await signinValidation(req.body);
    if (error) return res.status(400).json(error?.details[0].message);

    const user = await TutorRegister.findOne({ email: req.body.email });
    if (!user) return res.status(400).json('Invalid Email or password');

    const validPass = await bcrypt.compare(req.body.password, user.password);
    if (!validPass) return res.status(400).json('Invalid email or password');

    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
    res.header('auth-token', token).send(token);
  } catch (error) {
    res.status(400).json({ message: error?.message });
  }
});

module.exports = router;
