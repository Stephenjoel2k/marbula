var total = 0;
var track = {};
const corners = [];
const straights = [];
let dist;

//Length = long, short, medium => 4000, 3000, 2000
//10 > Turns < 26
//To get the length of the straight, remove 1/5th on either side of the length of the turn.
//0-50 sharp corner
//50-100 medium corner
//100-150 dangerous corner
const createRaceTrack = (length, turns) => {
  turn = Math.ceil(Math.random()*14 + 10);
  if(length == "long") dist = 5000;
  if(length == "medium") dist = 4000;
  if(length == "short") dist = 3000;
  for(var i=0;i<turns;i++){
    let trackComponent = (dist/turns) + (Math.random()*200) - (Math.random()*200);
    total += trackComponent;
    let straight = Math.ceil((Math.random()*2)+2)*trackComponent/5;
    let turn = trackComponent-straight;
    corners.push(turn);
    straights.push(straight);
  }
  straights.push(100); //Home strech
  track["track_length"] = Math.ceil(total);
  track["turn_count"] = turns;
  track["lap"] = {
    "straights" : straights,
    "corners" : corners
  }
  return track;
}


module.exports = { createRaceTrack }
