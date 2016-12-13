var CGVector = (function () {
    var x;
    var y;
    var z;
    
    var magnitude;
    var unitVector;
    var vectorAngXY;

    function CGVector(x1,y1,z1) {
        this.x = parseFloat(x1);
        this.y = parseFloat(y1);
        this.z = parseFloat(z1);
        
        this.magnitude = Math.sqrt(x1*x1 + y1*y1 +z1*z1);
        this.unitVector = new CGVector(x1/this.magnitude, y1/this.magnitude, z1/this.magnitude);
        this.vectorAngXY = Math.atan2(y1,x1);
        while(this.vectorAngXY <= -Math.PI){
            this.vectorAngXY += 2*Math.PI
        }
    }
    
    CGVector.prototype.getMagnitude = function () {
        return this.magnitude;
    }
    
    CGVector.prototype.getUnitVector = function () {
        return this.unitVector;
    }

    return CGVector;

})();
