var CGLine = (function () {
    
    var point1;
    var point2;
    var edges = [];
    var faces = [];

    function CGLine(x1,y1,z1,x2,y2,z2) {
        point1 = new CGPoint(x1,y1,z1);
        point2 = new CGPoint(x2,y2,z2);
    }
    
    CGLine.prototype.getFaces = function () {
        return this.faces;
    }
    
    CGLine.prototype.intersects = function (line){
        
    }

    return CGLine;

})();
