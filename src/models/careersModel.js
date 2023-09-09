const mongoose = require('mongoose');

const careersSchema = new mongoose.Schema({
  salutation: String,
  firstName: String,
  lastName: String,
  email: String,
  countryCode: String,
  phone: String,
  flat: String,
  street: String,
  landmark: String,
  pincode: String,
  city: String,
  state: String,
  country: String,
  company: String,
  jobTitle: String,
  jobLocation: String,
  fromDate: Date,
  jobSummary: String,
  appField1: String,
  appField2: String,
  appField3: String,
  appField4: String,
  appField5: String,
  appField6: String,
  resumeLink: String,
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


