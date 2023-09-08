const mongoose = require('mongoose');

const careersSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 10,
  },
  position: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    day: Number,
    month: Number,
    year: Number,
  },
  addressLine1: {
    type: String,
    required: true,
  },
  addressLine2: String,
  city: {
    type: String,
    required: true,
  },
  postalCode: String,
  state: String,
  country: String,
  salaryRequirements: {
    type: Number,
    min: 0,
  },
  startDate: Date,
  previousCompany: String,
  yearsExperience: Number,
  monthsExperience: Number,
  daysExperience: Number,
  linkedinProfile: String,
  willingToRelocate: String,
  queries: String,
  disclaimerAgreement: Boolean,
  status:{
    type:String,
    enum:["Approved","Rejected","Pending"],
    default:"Pending"
  },
  date:{
    type: String,
},
time :{
    type:String,
},
isDeleted: {
    type: Boolean,
    default: false
},
deletedAt: {
    type: Date
},


},{timestamps:true});

module.exports = mongoose.model('Careers', careersSchema);


