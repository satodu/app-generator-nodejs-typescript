"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var HeroRouter = /** @class */ (function () {
    /**
     * Initialize the HeroRouter
     */
    function HeroRouter() {
        this.router = express_1.Router();
        this.init();
    }
    /**
     * GET all Heroes.
     */
    HeroRouter.prototype.getAll = function (req, res, next) {
        res.send('hello hero');
    };
    /**
     * Take each handler, and attach to one of the Express.Router's
     * endpoints.
     */
    HeroRouter.prototype.init = function () {
        this.router.get('/', this.getAll);
    };
    return HeroRouter;
}());
exports.HeroRouter = HeroRouter;
// Create the HeroRouter, and export its configured Express.Router
var heroRoutes = new HeroRouter();
heroRoutes.init();
exports.default = heroRoutes.router;
