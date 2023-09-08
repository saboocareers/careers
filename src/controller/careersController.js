const careersModel = require("../models/careersModel");
const CareersModel = require("../models/careersModel");

const moment = require("moment");
require("moment-timezone");
const careers = async (req, res) => {
  try {
    data = req.body;
    moment.tz.setDefault("Asia/Kolkata");
    let dates = moment().format("YYYY-MM-DD");
    let times = moment().format("HH:mm:ss");
    data.date = dates;
    data.time = times;
    let savedata = await careersModel.create(data);
    return res.status(201).send({ status: true, data: savedata });
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
};

//==========================================================================
const getCareers = async (req, res) => {
  try {
    let data = await careersModel
      .find({ isDeleted: false })
      .sort({ createdAt: -1 })
      
    res.status(200).send({ status: true, data: data });
    if (!data) {
      return res.status(404).send({ status: false, message: "no data found" });
    }
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
};

//==========================================================================
const updateCareers = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  try {
    let data = req.body;
    const Id = req.params.Id; //getting the client id from the path params

    let updateData = await careersModel.findOneAndUpdate({ _id: Id }, data, {
      new: true,
    });
    if (!updateData) {
      return res.status(404).send({
        status: false,
        message: "no user found to update",
      });
    }
    return res
      .status(200)
      .send({ status: true, message: "success", data: updateData });
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
};
module.exports = { careers, getCareers, updateCareers };
