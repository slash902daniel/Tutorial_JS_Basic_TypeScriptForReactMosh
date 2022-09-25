export class PointClazzMod {
    constructor(private x?: number, private y?: number){
    }

    draw() {
        console.log('PointClazzMod');
        console.log('x: ' + this.x + ' ' + 'y:' + this.y);
    }
}

