var tape = require("tape"),
path = require("../");

require("./inDelta");

tape("Testing Length Quadratic", function(test) {

  var curve = new path.Bezier(200,300,400,50,600,300);
  test.inDelta(curve.getTotalLength(), 487.77, 0.1);
  test.end();
});
tape("Testing Length Cubic", function(test) {
  var curve = new path.Bezier(200,200,275,100,575,100,500,200);
  test.inDelta(curve.getTotalLength(), 383.44, 0.1);
  test.end();
});

tape("Testing getPointAtLength Quadratic", function(test) {

  var curve = new path.Bezier(200,300,400,50,600,300);
  var point = curve.getPointAtLength(487.77/6);
  test.inDelta(point.x, 255.24, 1);
  test.inDelta(point.y, 240.47, 1);
  test.end();
});

tape("Testing getPointAtLength Cubic", function(test) {

  var curve = new path.Bezier(200,200,275,100,575,100,500,200);
  var point = curve.getPointAtLength(383.44/6);
  test.inDelta(point.x, 249.48, 1);
  test.inDelta(point.y, 160.37, 1);
  test.end();
});

tape("Testing getTangentAtLength", function(test) {
  var curve = new path.Bezier(200,200,275,100,575,100,500,200);
  //console.info(curve.getTangentAtLength(curve.getTotalLength()/2));

  test.end();
});

tape("Testing pull request #16 solution", function(test) {
  var curve = new path.Bezier(640.48, 1285.21, 642.39, 644.73); 
  var tangent = curve.getTangentAtLength(curve.getTotalLength()/2);
  test.inDelta(tangent.y, 0, 1);
  test.inDelta(tangent.x, 0, 1);

  test.end();
});