var CGVector = (function () {
    var x;
    var y;
    var z;
    
    var magnitude;
    var unitVector;

    function CGVector(x1,y1,z1) {
        this.x = parseFloat(x1);
        this.y = parseFloat(y1);
        this.z = parseFloat(z1);
        
        this.magnitude = Math.sqrt(x*x + y*y +z*z);
        this.unitVector = new CGVector(x1/this.magnitude, y1/this.magnitude, z1/this.magnitude);
    }
    
    CGVector.prototype.getMagnitude = function () {
        return this.magnitude;
    }
    
    CGVector.prototype.getUnitVector = function () {
        return this.unitVector;
    }

    return CGVector;

})();
