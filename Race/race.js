const timeTurn = [];
const timeStraight = [];
let lap = {}

const race = (marbles, track) => {
  for(var i = 0; i<track.turn_count; i++){
    var time1 = doCorner(marbles, track.lap, i);
    var time2 = doStright(marbles, track.lap, i);
  }
  doStright(marbles, track.lap, (track.turn_count));
}

const doStright = (marbles, lap, i) => {
  var straight_length = lap.straights[i];
  var red = marbles[0];
  var speed = red.attributes.speed;
  var time = (straight_length/speed)  * (red.attributes.performance/100);
  return time;
}

const doCorner = (marbles, lap, i) => {
  var corner_length = lap.corners[i];
  var red = marbles[0];
  var speed = red.attributes.speed;
  var grip = red.attributes.grip;
  var time = (corner_length/grip)  * ((100 - red.attributes.performance)/100) - ((100-speed)/100);
  console.log(time);
  return time;
}


module.exports = {race}
