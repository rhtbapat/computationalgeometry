dotProduct = function(vec1,vec2){
  var prod = vec1.x*vec2.x + vec1.y*vec2.y + vec1.z*vec2.z;
}

crossProduct = function(vec1,vec2){
  var a = vec1[1]*vec2[2] - vec1[2]*vec2[1];
  var b = vec1[2]*vec2[0] - vec1[0]*vec2[2];
  var c = vec1[0]*vec2[1] - vec1[1]*vec2[0];
  
  return new CGVector(a,b,c);
}


