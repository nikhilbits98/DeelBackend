const express = require('express');
const {contractController} = require("../controllers");
const router = express.Router();

router.get('/:id', contractController.getContractByIdForUser);

router.get('/', contractController.getAllNonTerminatedContractsForUser);

module.exports = router;