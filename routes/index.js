"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = express_1.Router();
router.move('/somepath', function (req, res) {
    res.set('Location', res.get('Destination'));
});
router.route('/someroute')
    .get(function (req, res, next) {
    req.accepts('application/json');
    console.log('hello');
});
exports.default = router;
