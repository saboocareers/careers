const express = require("express")
let router = express.Router()
let {careers,getCareers , updateCareers} =require("../controller/careersController")
//====================================================================
router.get("/test-me", function (req, res) {
    res.send("this is successfully created");
  });
//======================================================================
router.post("/careers",careers)
router.get("/getCareers",getCareers)
//=============================================================
router.put("/updateCareers/:Id",updateCareers)
module.exports = router