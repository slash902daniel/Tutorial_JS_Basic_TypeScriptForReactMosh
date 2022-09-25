"use strict";
exports.__esModule = true;
exports.PointClazzMod = void 0;
var PointClazzMod = /** @class */ (function () {
    function PointClazzMod(x, y) {
        this.x = x;
        this.y = y;
    }
    PointClazzMod.prototype.draw = function () {
        console.log('PointClazzMod');
        console.log('x: ' + this.x + '' + 'y:' + this.y);
    };
    return PointClazzMod;
}());
exports.PointClazzMod = PointClazzMod;
