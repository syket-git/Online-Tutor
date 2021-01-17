const mongoose = require('mongoose');
const TutorUpdateProfile = mongoose.Schema({
  userId: {
    type: String,
  },
  email: {
    type: String,
  },
  ssc: {
    examination: {
      type: String,
    },
    board: {
      type: String,
    },
    group: {
      type: String,
    },
    passingYear: {
      type: Number,
    },
    result: {
      type: String,
    },
  },
  hsc: {
    examination: {
      type: String,
    },
    board: {
      type: String,
    },
    group: {
      type: String,
    },
    passingYear: {
      type: Number,
    },
    result: {
      type: String,
    },
  },
  graduation: {
    degree: {
      type: String,
    },
    subject: {
      type: String,
    },
    board: {
      type: String,
    },
    passingYear: {
      type: Number,
    },
    result: {
      type: String,
    },
  },
  master: {
    degree: {
      type: String,
    },
    subject: {
      type: String,
    },
    board: {
      type: String,
    },
    passingYear: {
      type: Number,
    },
    result: {
      type: String,
    },
  },

  speciality: {
    type: String,
  },
  presentAddress: {
    type: String,
  },
  permanentAddress: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
});

module.exports = mongoose.model('tutorUpdateProfile', TutorUpdateProfile);
