const express         = require("express"),
      passport        = require("passport"),
      isAuthenticated = require("../authentication"),
      router          = express.Router();

router.get("/", function (req, res) {
	res.status(200).send([{id: 1, text: "from server", complete: false}]);
});


router.get("/ping", function (req, res) {
	res.status(200).send("pong!");
});


module.exports = router;
