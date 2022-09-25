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
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }

    //console.log('Finally: ' + i);
}

doSomtehingLet();

function doSomtehingConst() {
    for (var i = 0; i < 5; i++) {
        const y = 0;
        console.log(i);
    }

    //console.log('Finally: ' + y);
}

doSomtehingConst();

//TYPES  ------------------------------------

//TS do not allow switch Types while JS does
let count = 5;
//count = 'a';

let a : number;
let b : boolean;
let c : string;
let d : any;
let e : number[] = [1,2,3];
let f : any[] = [1,true,'a'];

enum Color{Red=0,Green=1,Blue=2};
let backgroundColor = Color.Red;

//Specify Variable type to get help from autocomplete
let msg;
msg = 'abc';
let endsWithC = msg.endsWith('c');

//let endsWithC2 = (<string>msg).endsWith('c');
//let endsWithC3 = (msg as string).endsWith('c');

//Functions--------------------------------
//Regular
let log2 = function(message) {
    console.log(message);
}
log2('Functions-Regular');

//Arrow v1
let log3 = (message) => {
    console.log(message);
}
log3('Functions-ArrowV1');

//Arrow v2
let log4 = message => console.log(message);
log4('Functions-ArrowV2');

//Arrow v3
let log5 = () => console.log('Functions-ArrowV3');


//INLINE ANNOTATIONS TO PASS PARAMS ---------------------------------

let drawPoint1 = (point : {x:number, y:number}) =>{
    console.log('Functions-inline Annotation');
    console.log(point.x);
    console.log(point.y);
}

drawPoint1({
    x:1,
    y:2
})


//BETTER GO WITH INTERFACE -----------------

interface Point{
    x: number,
    y: number,
    draw: () => void,
    getDistance: () => void,
}

let drawPoint2 = (point : Point) =>{
    console.log('Functions-withInterface');
    console.log(point.x);
    console.log(point.y);
}

drawPoint2({
    x:3,
    y:4,
    draw() {
        console.log('Functions-withClass draw');
        console.log(this.x);
        console.log(this.y);
    },
    getDistance() {
        console.log('Functions-withClass getDistance');
        console.log(this.x);
        console.log(this.y);
    }
})

//CLASS -----------------
class PointClazzV1{
    x: number;
    y: number;

    draw() {
        console.log('Functions-withClass draw');
        console.log(this.x);
        console.log(this.y);
    };
    getDistance() {
        console.log('Functions-withClass getDistance');
        console.log(this.x);
        console.log(this.y);
    }
}

let drawPointClazzV1 : PointClazzV1 = new PointClazzV1();
drawPointClazzV1.x=10;
drawPointClazzV1.y=20;
drawPointClazzV1.draw();

//Class with Constructors ------------------------------------
//ONLY Single constructor
class PointClazzWithConstructorsV1{
    x: number;
    y: number;

    constructor(x: number, y:number) {
        this.x = x;
        this.y = y;
    }

    draw() {
        console.log('PointClazzWithConstructorsV1 draw');
        console.log(this.x);
        console.log(this.y);
    };
    getDistance() {
        console.log('PointClazzWithConstructorsV1 getDistance');
        console.log(this.x);
        console.log(this.y);
    }
}

let drawPointClazzWithConstructorsV1 : PointClazzWithConstructorsV1 = new PointClazzWithConstructorsV1(30,40);
drawPointClazzWithConstructorsV1.draw();


//With constructor parameters optional (as we can only have a single constructor)
class PointClazzWithConstructorsV2{

    x: number | undefined;
    y: number | undefined;

    constructor(x?: number, y?:number) {
        this.x = x;
        this.y = y;
    }

    draw() {
        console.log('PointClazzWithConstructorsV2 draw');
        console.log(this.x);
        console.log(this.y);
    };
    getDistance() {
        console.log('PointClazzWithConstructorsV2 getDistance');
        console.log(this.x);
        console.log(this.y);
    }
}

let drawPointClazzWithConstructorsV2 : PointClazzWithConstructorsV2 = new PointClazzWithConstructorsV2(50,60);
drawPointClazzWithConstructorsV2.x=100;
drawPointClazzWithConstructorsV2.draw();

let drawPointClazzWithConstructorsV2_empty : PointClazzWithConstructorsV2 = new PointClazzWithConstructorsV2();
drawPointClazzWithConstructorsV2_empty.draw();

//With private/public properties ------------------------------------
//Public / private / Protected
class PointClazzWithConstructorsV3{

    private x: number | undefined;
    private y: number | undefined;

    constructor(x?: number, y?:number) {
        this.x = x;
        this.y = y;
    }

    draw() {
        console.log('PointClazzWithConstructorsV3 draw');
        console.log(this.x);
        console.log(this.y);
    };
    getDistance() {
        console.log('PointClazzWithConstructorsV3 getDistance');
        console.log(this.x);
        console.log(this.y);
    }
}

let drawPointClazzWithConstructorsV3 : PointClazzWithConstructorsV3 = new PointClazzWithConstructorsV3(50,60);
//drawPointClazzWithConstructorsV3.x=100; -->not accesible
drawPointClazzWithConstructorsV3.draw();

//With private/public properties ------------------------------------
//Public / private / Protected
//Simplified 
class PointClazzWithConstructorsV4{

    constructor(public x?: number, private y?:number) {
    }

    draw() {
        console.log('PointClazzWithConstructorsV4 draw');
        console.log(this.x);
        console.log(this.y);
    };
    getDistance() {
        console.log('PointClazzWithConstructorsV4 getDistance');
        console.log(this.x);
        console.log(this.y);
    }
}

let drawPointClazzWithConstructorsV4 : PointClazzWithConstructorsV4 = new PointClazzWithConstructorsV4(80,90);
drawPointClazzWithConstructorsV4.x=200;
drawPointClazzWithConstructorsV4.draw();

//With Getters /Setters ------------------------------------
//Public / private / Protected
//Regular 
class PointClazzWithConstructorsV5{

    constructor(public x?: number, private y?:number) {
    }

    draw() {
        console.log('PointClazzWithConstructorsV5 draw');
        console.log(this.x);
        console.log(this.y);
    };
    getDistance() {
        console.log('PointClazzWithConstructorsV5 getDistance');
        console.log(this.x);
        console.log(this.y);
    }

    getX(){
        return this.x;
    }

    setX(value){
        if (value < 0) 
        throw new Error("V5 Value cannot be less than 0");
        
        this.x = value;
    }

}

let drawPointClazzWithConstructorsV5 : PointClazzWithConstructorsV5 = new PointClazzWithConstructorsV5(80,90);
drawPointClazzWithConstructorsV5.x=200;

//drawPointClazzWithConstructorsV5.setX(0);
//drawPointClazzWithConstructorsV5.setX(-1);

drawPointClazzWithConstructorsV5.setX(3400);
console.log(drawPointClazzWithConstructorsV5.getX());

drawPointClazzWithConstructorsV5.draw();

//With Getters /Setters ------------------------------------
//Public / private / Protected
//Simplified 
class PointClazzWithConstructorsV6{

    constructor(private x?: number, private y?:number) {
    }

    draw() {
        console.log('PointClazzWithConstructorsV6 draw');
        console.log(this.x);
        console.log(this.y);
    };
    getDistance() {
        console.log('PointClazzWithConstructorsV6 getDistance');
        console.log(this.x);
        console.log(this.y);
    }

    get X() {
        return this.x;
    }

    set X(value){
        if (value < 0) 
            throw new Error("V6 Value cannot be less than 0");
        
        this.x = value;

    }

}

let drawPointClazzWithConstructorsV6 : PointClazzWithConstructorsV6 = new PointClazzWithConstructorsV6(80,90);

//drawPointClazzWithConstructorsV6.X=-1;
drawPointClazzWithConstructorsV6.X=200;
let Xvalue = drawPointClazzWithConstructorsV6.X;
console.log(Xvalue);

drawPointClazzWithConstructorsV6.draw();


//MODULES ------------------------------------
import {PointClazzMod} from './point';

let PointClazzModV1 = new PointClazzMod(4,5);
PointClazzModV1.draw();