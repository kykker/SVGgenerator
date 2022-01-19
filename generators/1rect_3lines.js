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

let randomness1 = utils.randomNumber( 7357, 13256 )
let randomness2 = utils.randomNumber( 1253, 6967 )
console.log(randomness1)
console.log(randomness2)

let fnIndex = randomness1 % 4
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
     'rgb(1, 1, 222)',
     'rgb(199, 22, 28)',
     'rgb(199, 22, 28)',
     'rgb(158, 11, 15)',
     'rgb(246, 97, 0)',
     'rgb(170, 160, 0)',
     'rgb(147, 10, 14)',
     'rgb(254, 248, 69)',
     'rgb(146, 229, 114)',
     'rgb(196, 251, 83)',
     'rgb(127, 254, 114)',
     'rgb(254, 137, 125)',
]

const rectPalette = [
     'rgb(255, 238, 207)',
     'rgb(251, 152, 180)',
     'rgb(145, 207, 241)',
     'rgb(18, 223, 201)',
     'rgb(251, 243, 200)',
     'rgb(18, 223, 201)',
     'rgb(251, 152, 180)',
     'rgb(57, 227, 124)',
     'rgb(239, 150, 45)',
     'rgb(222, 195, 157)',
     'rgb(236, 145, 152)',
]

// Pick a random color based on an external randomness
// pass the array of colors
// also add some Salt, which will be added in the For Loop

let randomColor = (r, array ) => {
     // let saltedR = utils.randomNumber( 0, s ) * r ;
     let index = r % array.length;
     return array[index];
}
const randomBackground = randomColor( randomness1, rectPalette );
console.log( randomBackground );

let randomSaltedColor = (r, array, s ) => {
     let saltedR = s * r ;
     let index = saltedR % array.length;
     return array[index];
}

let arrayOfRaysColors = [];

for ( let s = 1; s < 4; s++ ) {
     let salt = s + s** 2 * utils.randomNumber( 7, 8**(s+1) );
     console.log( "salt = ", salt )
     let randomRayColor1 = randomSaltedColor( randomness1, raysPalette, salt );
     arrayOfRaysColors.push( randomRayColor1 );
     let randomRayColor2 = randomSaltedColor( randomness2, raysPalette, salt );
     arrayOfRaysColors.push( randomRayColor2 );
}
console.log(arrayOfRaysColors);


// String template to build the SVG
let rawSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" >
  
<path d="${originString} L${fnY1} " fill="transparent" stroke="${arrayOfRaysColors[0]}"/>
<path d="${originString} L${fnY2}" fill="transparent" stroke="${arrayOfRaysColors[1]}"/>
<path d="${originString} L${fnY3} " fill="transparent" stroke="${arrayOfRaysColors[2]}"/>
<path d="${originString} L${fnY4} " fill="transparent" stroke="${arrayOfRaysColors[3]}"/>

<path d="${originString} L200 500 " fill="transparent" stroke="${arrayOfRaysColors[4]}"/>
<path d="${originString} L200 0 " fill="transparent" stroke="${arrayOfRaysColors[5]}"/>

<rect x="0" y="${rect_up}" width="400" height="${height}" 
     stroke="/27f5e566" stroke-opacity="0.8" 
     fill="${randomBackground}" fill-opacity="0.1" />

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
