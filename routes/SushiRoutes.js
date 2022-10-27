const express = require("express")
const router = express.Router();
const SushiCtrl = require('../controllers/SushiController');

router.get("/", SushiCtrl.apiGetAllSushis);
router.get("/:id", SushiCtrl.apiGetSushiById);
router.post("/", SushiCtrl.apiCreateSushi);

module.exports = router;