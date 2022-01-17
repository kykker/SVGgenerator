// load a couple of utilities
const utils = require('./saveFile');

// origin is the center, epicenter of all the arrays
// const origin = utils.randomNumber( 180, 220 );
const originX = utils.randomNumber( 20, 380 )
const originY = utils.randomNumber( 190, 210 )
const size = 400
// upper bound of the rectangle
const depth = utils.randomNumber( )
const height = utils.randomNumber( 80, 100 )
const rect_up = utils.randomNumber( (originY-height-20), (originY-20) )
const rect_low = rect_up+height
const originString = `M${originX} ${originY}`;

let randomness = utils.randomNumber( 0, 5 )

let fnIndex = randomness % 4
console.log(fnIndex)

// List of Functions to calculate Y, the end point of the rays inside the rectangle
let fnY1 = `${utils.randomNumber( 0, size ) } ${rect_up}`;
let fnY2 = `${utils.randomNumber( 0, size ) } ${rect_up + height}`;
let fnY3 = `0 ${utils.randomNumber(rect_up, rect_low) }`
let fnY4 = `${size} ${utils.randomNumber(rect_up, rect_low) }`

let fnArray = [
     fnY1,
     fnY2,
     fnY3,
     fnY4,
]

const raysPalette = [

]

const rectPalette = [

]

// String template to build the SVG
let rawSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" >
  
<path d="${originString} L${fnY1} " fill="transparent" stroke="magenta"/>
<path d="${originString} L${fnY2}" fill="transparent" stroke="blue"/>
<path d="${originString} L${fnY3} " fill="transparent" stroke="darkgrey"/>
<path d="${originString} L${fnY4} " fill="transparent" stroke="green"/>

<path d="${originString} L200 500 " fill="transparent" stroke="darkred"/>
<path d="${originString} L200 180 " fill="transparent" stroke="orange"/>
<path d="${originString} L200 20 " fill="transparent" stroke="orange"/>

<rect x="0" y="${rect_up}" width="400" height="${height}" 
     stroke="/27f5e566" stroke-opacity="0.8" 
     fill="purple" fill-opacity="0.1" />

</svg>`

console.log("SVG saved")

// Get a print time
const time = new Date().toLocaleTimeString()
.replaceAll('/', '')
.replaceAll(':', '')
.replaceAll(', ', '_');

// Create an SVG file in ./img_sample
const path = `../img_sample/test_${time}.svg`;
utils.saveFile( path, rawSVG );
