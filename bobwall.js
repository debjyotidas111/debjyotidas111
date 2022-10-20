let length = 24;
let height = 8;
let thickness = 0.6;
let no_bricks = Math.ceil( 0.85 * length * height * thickness * Math.pow (100,3) / 2304);
console.log("number of bricks needed to construct the wall is ", no_bricks );
//let brick_volume = 