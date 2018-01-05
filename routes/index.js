"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var Index = /** @class */ (function () {
    function Index() {
        this.router = express_1.Router();
        this.init();
    }
    Index.prototype.getAll = function (req, res, next) {
        res.send({
            "userId": 1,
            "id": 1,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
        });
    };
    Index.prototype.init = function () {
        this.router.get('/', this.getAll);
    };
    return Index;
}());
exports.Index = Index;
var index = new Index();
index.init();
exports.default = index.router;
