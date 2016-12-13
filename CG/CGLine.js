var CGLine = (function () {
    
    var point1;
    var point2;
    var edges = [];
    var faces = [];
    var vec;
    var normalVec;

    function CGLine(x1,y1,z1,x2,y2,z2) {
        this.point1 = new CGPoint(x1,y1,z1);
        this.point2 = new CGPoint(x2,y2,z2);
    }
    
    CGLine.prototype.createVectors() {
        this.vec = new CGVector(this.point2.x-this.point1.x, this.point2.y-this.point1.y, this.point2.z-this.point1.z);
        this.normalVec = this.vec.getUnitVector();
    }
    
    CGLine.prototype.getFaces = function () {
        return this.faces;
    }
    
    CGLine.prototype.intersects = function (line){
        
    }

    return CGLine;

})();
