export default function(x0, x1, y0, y1) {
  return new LinearPosition(x0, x1, y0, y1);

}

function LinearPosition(x0, x1, y0, y1){
  this.x0 = x0;
  this.x1 = x1;
  this.y0 = y0;
  this.y1 = y1;
}

LinearPosition.prototype.getLength = function(){
  return Math.sqrt(Math.pow(this.x0 - this.x1, 2) +
         Math.pow(this.y0 - this.y1, 2));
};

LinearPosition.prototype.getPositionAtLength = function(pos){

  var fraction = pos/ (Math.sqrt(Math.pow(this.x0 - this.x1, 2) +
         Math.pow(this.y0 - this.y1, 2)));
  
  var newDeltaX = (this.x1 - this.x0)*fraction;
  var newDeltaY = (this.y1 - this.y0)*fraction;
  return { x: this.x0 + newDeltaX, y: this.y0 + newDeltaY };
};
