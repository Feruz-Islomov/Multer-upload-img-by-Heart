"use strict";
const express = require("express");
const { upload } = require("../helpers/filehelper");
const {
  singleFileUpload,
  multipleFileUpload,
  getAllSingleFiles,
  getAllMultipleFiles,
} = require("../controllers/fileUploaderController");

const router = express.Router();

router.post("/singleFile", upload.single("file"), singleFileUpload);
router.post("/multipleFiles", upload.array("files"), multipleFileUpload);
router.get("/getSingleFiles", getAllSingleFiles);
router.get("/getMultipleFiles", getAllMultipleFiles);

module.exports = { routes: router };
