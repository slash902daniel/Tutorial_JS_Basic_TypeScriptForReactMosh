"use strict";
exports.__esModule = true;
console.log('Main.ts');
//https://www.youtube.com/watch?v=NjN00cM18Z4
//INSTRUCTIONS=============================
//install node: Download from webpage or npm
//Install typescript npm i -g typescript
//Install IDE
//COMPILE / RUN=============================
//To compile -->    tsc
//To run a file --> node main.ts
//==========================================
function log(message) {
    console.log(message);
}
var message = 'hello world';
log(message);
//DECLARE VARIABLES-----------------------------
//var --scope to the nearest function
//let
//const
function doSomtehingVar() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log('Finally: ' + i);
}
doSomtehingVar();
function doSomtehingLet() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    //console.log('Finally: ' + i);
}
doSomtehingLet();
function doSomtehingConst() {
    for (var i = 0; i < 5; i++) {
        var y = 0;
        console.log(i);
    }
    //console.log('Finally: ' + y);
}
doSomtehingConst();
//TYPES  ------------------------------------
//TS do not allow switch Types while JS does
var count = 5;
//count = 'a';
var a;
var b;
var c;
var d;
var e = [1, 2, 3];
var f = [1, true, 'a'];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var backgroundColor = Color.Red;
//Specify Variable type to get help from autocomplete
var msg;
msg = 'abc';
var endsWithC = msg.endsWith('c');
//let endsWithC2 = (<string>msg).endsWith('c');
//let endsWithC3 = (msg as string).endsWith('c');
//Functions--------------------------------
//Regular
var log2 = function (message) {
    console.log(message);
};
log2('Functions-Regular');
//Arrow v1
var log3 = function (message) {
    console.log(message);
};
log3('Functions-ArrowV1');
//Arrow v2
var log4 = function (message) { return console.log(message); };
log4('Functions-ArrowV2');
//Arrow v3
var log5 = function () { return console.log('Functions-ArrowV3'); };
//INLINE ANNOTATIONS TO PASS PARAMS ---------------------------------
var drawPoint1 = function (point) {
    console.log('Functions-inline Annotation');
    console.log(point.x);
    console.log(point.y);
};
drawPoint1({
    x: 1,
    y: 2
});
var drawPoint2 = function (point) {
    console.log('Functions-withInterface');
    console.log(point.x);
    console.log(point.y);
};
drawPoint2({
    x: 3,
    y: 4,
    draw: function () {
        console.log('Functions-withClass draw');
        console.log(this.x);
        console.log(this.y);
    },
    getDistance: function () {
        console.log('Functions-withClass getDistance');
        console.log(this.x);
        console.log(this.y);
    }
});
//CLASS -----------------
var PointClazzV1 = /** @class */ (function () {
    function PointClazzV1() {
    }
    PointClazzV1.prototype.draw = function () {
        console.log('Functions-withClass draw');
        console.log(this.x);
        console.log(this.y);
    };
    ;
    PointClazzV1.prototype.getDistance = function () {
        console.log('Functions-withClass getDistance');
        console.log(this.x);
        console.log(this.y);
    };
    return PointClazzV1;
}());
var drawPointClazzV1 = new PointClazzV1();
drawPointClazzV1.x = 10;
drawPointClazzV1.y = 20;
drawPointClazzV1.draw();
//Class with Constructors ------------------------------------
//ONLY Single constructor
var PointClazzWithConstructorsV1 = /** @class */ (function () {
    function PointClazzWithConstructorsV1(x, y) {
        this.x = x;
        this.y = y;
    }
    PointClazzWithConstructorsV1.prototype.draw = function () {
        console.log('PointClazzWithConstructorsV1 draw');
        console.log(this.x);
        console.log(this.y);
    };
    ;
    PointClazzWithConstructorsV1.prototype.getDistance = function () {
        console.log('PointClazzWithConstructorsV1 getDistance');
        console.log(this.x);
        console.log(this.y);
    };
    return PointClazzWithConstructorsV1;
}());
var drawPointClazzWithConstructorsV1 = new PointClazzWithConstructorsV1(30, 40);
drawPointClazzWithConstructorsV1.draw();
//With constructor parameters optional (as we can only have a single constructor)
var PointClazzWithConstructorsV2 = /** @class */ (function () {
    function PointClazzWithConstructorsV2(x, y) {
        this.x = x;
        this.y = y;
    }
    PointClazzWithConstructorsV2.prototype.draw = function () {
        console.log('PointClazzWithConstructorsV2 draw');
        console.log(this.x);
        console.log(this.y);
    };
    ;
    PointClazzWithConstructorsV2.prototype.getDistance = function () {
        console.log('PointClazzWithConstructorsV2 getDistance');
        console.log(this.x);
        console.log(this.y);
    };
    return PointClazzWithConstructorsV2;
}());
var drawPointClazzWithConstructorsV2 = new PointClazzWithConstructorsV2(50, 60);
drawPointClazzWithConstructorsV2.x = 100;
drawPointClazzWithConstructorsV2.draw();
var drawPointClazzWithConstructorsV2_empty = new PointClazzWithConstructorsV2();
drawPointClazzWithConstructorsV2_empty.draw();
//With private/public properties ------------------------------------
//Public / private / Protected
var PointClazzWithConstructorsV3 = /** @class */ (function () {
    function PointClazzWithConstructorsV3(x, y) {
        this.x = x;
        this.y = y;
    }
    PointClazzWithConstructorsV3.prototype.draw = function () {
        console.log('PointClazzWithConstructorsV3 draw');
        console.log(this.x);
        console.log(this.y);
    };
    ;
    PointClazzWithConstructorsV3.prototype.getDistance = function () {
        console.log('PointClazzWithConstructorsV3 getDistance');
        console.log(this.x);
        console.log(this.y);
    };
    return PointClazzWithConstructorsV3;
}());
var drawPointClazzWithConstructorsV3 = new PointClazzWithConstructorsV3(50, 60);
//drawPointClazzWithConstructorsV3.x=100; -->not accesible
drawPointClazzWithConstructorsV3.draw();
//With private/public properties ------------------------------------
//Public / private / Protected
//Simplified 
var PointClazzWithConstructorsV4 = /** @class */ (function () {
    function PointClazzWithConstructorsV4(x, y) {
        this.x = x;
        this.y = y;
    }
    PointClazzWithConstructorsV4.prototype.draw = function () {
        console.log('PointClazzWithConstructorsV4 draw');
        console.log(this.x);
        console.log(this.y);
    };
    ;
    PointClazzWithConstructorsV4.prototype.getDistance = function () {
        console.log('PointClazzWithConstructorsV4 getDistance');
        console.log(this.x);
        console.log(this.y);
    };
    return PointClazzWithConstructorsV4;
}());
var drawPointClazzWithConstructorsV4 = new PointClazzWithConstructorsV4(80, 90);
drawPointClazzWithConstructorsV4.x = 200;
drawPointClazzWithConstructorsV4.draw();
//With Getters /Setters ------------------------------------
//Public / private / Protected
//Regular 
var PointClazzWithConstructorsV5 = /** @class */ (function () {
    function PointClazzWithConstructorsV5(x, y) {
        this.x = x;
        this.y = y;
    }
    PointClazzWithConstructorsV5.prototype.draw = function () {
        console.log('PointClazzWithConstructorsV5 draw');
        console.log(this.x);
        console.log(this.y);
    };
    ;
    PointClazzWithConstructorsV5.prototype.getDistance = function () {
        console.log('PointClazzWithConstructorsV5 getDistance');
        console.log(this.x);
        console.log(this.y);
    };
    PointClazzWithConstructorsV5.prototype.getX = function () {
        return this.x;
    };
    PointClazzWithConstructorsV5.prototype.setX = function (value) {
        if (value < 0)
            throw new Error("V5 Value cannot be less than 0");
        this.x = value;
    };
    return PointClazzWithConstructorsV5;
}());
var drawPointClazzWithConstructorsV5 = new PointClazzWithConstructorsV5(80, 90);
drawPointClazzWithConstructorsV5.x = 200;
//drawPointClazzWithConstructorsV5.setX(0);
//drawPointClazzWithConstructorsV5.setX(-1);
drawPointClazzWithConstructorsV5.setX(3400);
console.log(drawPointClazzWithConstructorsV5.getX());
drawPointClazzWithConstructorsV5.draw();
//With Getters /Setters ------------------------------------
//Public / private / Protected
//Simplified 
var PointClazzWithConstructorsV6 = /** @class */ (function () {
    function PointClazzWithConstructorsV6(x, y) {
        this.x = x;
        this.y = y;
    }
    PointClazzWithConstructorsV6.prototype.draw = function () {
        console.log('PointClazzWithConstructorsV6 draw');
        console.log(this.x);
        console.log(this.y);
    };
    ;
    PointClazzWithConstructorsV6.prototype.getDistance = function () {
        console.log('PointClazzWithConstructorsV6 getDistance');
        console.log(this.x);
        console.log(this.y);
    };
    Object.defineProperty(PointClazzWithConstructorsV6.prototype, "X", {
        get: function () {
            return this.x;
        },
        set: function (value) {
            if (value < 0)
                throw new Error("V6 Value cannot be less than 0");
            this.x = value;
        },
        enumerable: false,
        configurable: true
    });
    return PointClazzWithConstructorsV6;
}());
var drawPointClazzWithConstructorsV6 = new PointClazzWithConstructorsV6(80, 90);
//drawPointClazzWithConstructorsV6.X=-1;
drawPointClazzWithConstructorsV6.X = 200;
var Xvalue = drawPointClazzWithConstructorsV6.X;
console.log(Xvalue);
drawPointClazzWithConstructorsV6.draw();
//MODULES ------------------------------------
var point_1 = require("./point");
var PointClazzModV1 = new point_1.PointClazzMod(4, 5);
PointClazzModV1.draw();
