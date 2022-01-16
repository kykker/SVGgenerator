let utils = require('./saveFile');

const origin = 'M200 200';
const size = '400'
const rect_up = '180'
const height = '100'

let rawSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" >
  
<path d="${origin} L${size} 180 " fill="transparent" stroke="magenta"/>
<path d="${origin} L0 260  " fill="transparent" stroke="blue"/>
<path d="${origin} L400 195 " fill="transparent" stroke="darkgrey"/>
<path d="${origin} L200 500 " fill="transparent" stroke="darkred"/>
<path d="${origin} L200 180 " fill="transparent" stroke="orange"/>
<path d="${origin} L200 20 " fill="transparent" stroke="orange"/>

<rect x="0" y="${rect_up}" width="400" height="${height}" 
     stroke="/27f5e566" stroke-opacity="0.8" 
     fill="purple" fill-opacity="0.1" />

</svg>`

console.log("SVG saved")
const time = new Date().toLocaleTimeString()
.replaceAll('/', '')
.replaceAll(':', '')
.replaceAll(', ', '_');

const path = `../img_sample/test_${time}.svg`;
console.log(time)

utils.saveFile( path, rawSVG );
