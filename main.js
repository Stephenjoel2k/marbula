const { red } = require("./Marble/red.js")
const { green } = require("./Marble/green.js")
const { blue } = require("./Marble/blue.js")
const { yellow } = require("./Marble/yellow.js")
const { createRaceTrack } = require("./Track/track.js")
const { race } = require("./Race/race.js")

const marbles = [red, green, blue, yellow];

var track = createRaceTrack("long", 12);
race(marbles, track);
