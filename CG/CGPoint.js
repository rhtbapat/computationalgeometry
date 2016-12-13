var CGPoint = (function () {

    var x;
    var y;
    var z;
    
    var edges = [];
    var faces = [];

    function CGPoint(x1,y1,z1) {

        x = parseFloat(x1);
        y = parseFloat(y1);
        z = parseFloat(z1);
    }

    CGPoint.prototype.getEdges = function () {
        return this.edges;
    }
    
    CGPoint.prototype.getFaces = function () {
        return this.faces;
    }

    return CGPoint;

})();
