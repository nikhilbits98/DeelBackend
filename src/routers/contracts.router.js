const express = require('express');
const {getProfile} = require("../middleware/getProfile");
const {contractController} = require("../controllers");
const router = express.Router();

router.get('/:id', contractController.getContractById);

module.exports = router;