const express = require('express');
const router = express.Router();
const verify = require('../verify');
const {
  tutorUpdateProfile,
} = require('../models/UpdateProfile/TutorUpdateProfile');

router.put('/tutor', verify, async (req, res) => {
  try {
    const TutorProfileUpdate = new tutorUpdateProfile({
      userId: req.body.userId,
      email: req.body.email,
      ssc: {
        examination: req.body.sscExamination,
        board: req.body.sscBoard,
        group: req.body.sscGroup,
        passingYear: req.body.sscPassingYear,
        result: req.body.sscResult,
      },
      hsc: {
        examination: req.body.hscExamination,
        board: req.body.hscBoard,
        group: req.body.hscGroup,
        passingYear: req.body.hscPassingYear,
        result: req.body.hscResult,
      },
      graduation: {
        degree: req.body.graduationDegree,
        subject: req.body.graduationSubject,
        board: req.body.graduationBoard,
        passingYear: req.body.graduationPassingYear,
        result: req.body.graduationResult,
      },
      master: {
        degree: req.body.masterDegree,
        subject: req.body.masterSubject,
        board: req.body.masterBoard,
        passingYear: req.body.masterPassingYear,
        result: req.body.masterResult,
      },
      speciality: req.body.speciality,
      presentAddress: req.body.presentAddress,
      permanentAddress: req.body.permanentAddress,
    });

    await TutorProfileUpdate.save();

    res.json({ status: true, message: 'Profile update successfully done' });
  } catch (err) {
    res.status(400).json({ message: err?.message });
  }
});

module.exports = router;
